import nodemailer from 'nodemailer';

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
export const subscribeToNewsletter = async (req, res) => {
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
};