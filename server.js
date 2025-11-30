import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe with Secret Key
const stripe = new Stripe('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');

// Middleware
app.use(cors());
app.use(express.json());

// In-memory newsletter subscribers (in production, use a database)
const subscribers = new Set();

// Configure email service (using Gmail or your preferred email service)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'calllawapp@gmail.com',
    pass: process.env.EMAIL_PASSWORD || '',
  },
});

// Newsletter signup endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Check if email already subscribed
    if (subscribers.has(email)) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add to subscribers
    subscribers.add(email);

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'calllawapp@gmail.com',
      to: email,
      subject: 'Welcome to Call Law App Newsletter',
      html: `
        <h2>Welcome to Call Law App!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You will now receive updates about:</p>
        <ul>
          <li>New legal services and coverage options</li>
          <li>Important legal insights and resources</li>
          <li>Exclusive offers and promotions</li>
          <li>Updates about our L.I.S.A. AI assistant</li>
        </ul>
        <p>Best regards,<br/>Call Law App Team</p>
      `,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      email: email 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
});

// Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { productId, email } = req.body;

    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    // Retrieve the product from Stripe to get its prices
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
    });

    if (!product.default_price) {
      return res.status(400).json({ error: 'Product does not have a default price' });
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: product.default_price.id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.DOMAIN || 'http://localhost:5173'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN || 'http://localhost:5173'}/cancel`,
      customer_email: email || undefined,
      metadata: {
        product_id: productId,
        customer_email: email,
      },
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Webhook endpoint for Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || 'whsec_gPydORqug8NScSm8QBMBbNx6COoT7y8N'
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message);
    return res.sendStatus(400);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful for:', session.customer_email);
      // Here you would typically update your database with the purchase information
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment intent succeeded:', paymentIntent.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.sendStatus(200);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Call Law App server running on port ${PORT}`);
  console.log(`Stripe integration active with account: acct_1JIZwPCoHvYT5CHG`);
});
