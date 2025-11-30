import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { priceId, email } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: "Price ID is required" });
    }

    // Create checkout session using PRICE ID directly
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: priceId, // PRICE ID only
          quantity: 1,
        },
      ],

      success_url: `${process.env.DOMAIN || "https://www.calllawapp.com"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN || "https://www.calllawapp.com"}/cancel`,

      customer_email: email || undefined,

      metadata: {
        price_id: priceId,
        customer_email: email,
      },
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Checkout session creation error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
}
