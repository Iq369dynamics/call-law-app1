# Payment Integration Guide

## Overview

This guide explains the payment functionality that has been integrated into the Call Law App project using Stripe.

## Payment System Components

### Backend (server.js)

The Express.js server handles:
- **Stripe Checkout Sessions**: Creates payment sessions for each coverage option
- **Webhook Handler**: Processes payment events from Stripe
- **Newsletter Subscriptions**: Email signup with nodemailer

**API Endpoints:**
- `POST /api/create-checkout-session` - Creates a Stripe checkout session
- `POST /api/webhook` - Receives Stripe webhook events
- `POST /api/newsletter/subscribe` - Newsletter email subscription
- `GET /api/health` - Server health check

### Frontend (src/pages/Home.jsx)

The React frontend includes:
- **Stripe.js Integration**: Client-side Stripe library
- **Payment Modal**: User-friendly checkout flow
- **Coverage Options**: 4 pricing tiers with "Get Started" buttons
- **Newsletter Signup**: Optional email collection

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

This will install all payment-related dependencies:
- `@stripe/stripe-js` - Client-side Stripe library
- `stripe` - Server-side Stripe SDK
- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `nodemailer` - Email sending

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Update the `.env` file with your credentials:

```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
DOMAIN=http://localhost:5173
```

**Important Notes:**
- For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833)
- The Stripe keys in the code are currently set to live mode - update them if using test mode
- Webhook secret can be obtained from the Stripe Dashboard

### 3. Update Stripe Keys (Optional)

If you want to use your own Stripe account or test mode:

**Frontend** (`src/pages/Home.jsx` line 32):
```javascript
const stripeInstance = await loadStripe('pk_live_YOUR_PUBLISHABLE_KEY')
```

**Backend** (`server.js` line 13):
```javascript
const stripe = new Stripe('sk_live_YOUR_SECRET_KEY')
```

**Product IDs** (`src/pages/Home.jsx` lines 38-43):
```javascript
const productMap = {
  'CLA 30-Day Travel Coverage': 'prod_YOUR_PRODUCT_ID_1',
  'Single Coverage': 'prod_YOUR_PRODUCT_ID_2',
  'Family Coverage': 'prod_YOUR_PRODUCT_ID_3',
  'Group Coverage': 'prod_YOUR_PRODUCT_ID_4'
}
```

### 4. Run the Application

**Terminal 1 - Start Backend Server:**
```bash
node server.js
```

The server will start on `http://localhost:3001`

**Terminal 2 - Start Frontend:**
```bash
pnpm run dev
```

The frontend will start on `http://localhost:5173`

## How It Works

### Payment Flow

1. **User Clicks "Get Started"** on a coverage option
   - Opens payment modal
   - User can optionally enter email for newsletter

2. **User Clicks "Proceed to Payment"**
   - Frontend calls backend API to create checkout session
   - Backend creates Stripe checkout session with product details
   - User is redirected to Stripe-hosted checkout page

3. **User Completes Payment**
   - Stripe processes payment securely
   - User is redirected to success or cancel page
   - Webhook notifies backend of payment status

4. **Backend Receives Webhook**
   - Validates webhook signature
   - Processes payment events (checkout completed, payment succeeded)
   - Can update database or send confirmation emails

### Stripe Products

The application uses 4 pre-configured Stripe products:

| Coverage Plan | Price | Product ID |
|--------------|-------|------------|
| 30-Day Travel Coverage | $75.49 | prod_TO2cquLzPGGEQp |
| Single Coverage | $117.90 | prod_TO2focZOjOeXXB |
| Family Coverage | $87.90/person | prod_TO2jV4KcmTcXuU |
| Group Coverage | $69.16/person | prod_TO2nFMOrAKHY1j |

## Testing Payments

### Test Mode

To test without real payments:

1. Use Stripe test keys instead of live keys
2. Create test products in Stripe Dashboard
3. Use [Stripe test cards](https://stripe.com/docs/testing):
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

### Webhook Testing

Use Stripe CLI to test webhooks locally:

```bash
stripe listen --forward-to localhost:3001/api/webhook
```

This will give you a webhook signing secret to use in `.env`

## Security Considerations

1. **Never commit .env file** - Contains sensitive credentials
2. **Use environment variables** - For all API keys and secrets
3. **Validate webhook signatures** - Already implemented in server.js
4. **HTTPS in production** - Required for live payments
5. **PCI Compliance** - Stripe handles card data (no card info touches your server)

## Deployment Checklist

Before deploying to production:

- [ ] Update Stripe keys to live mode (if using test keys)
- [ ] Configure production environment variables
- [ ] Set correct DOMAIN in .env for redirect URLs
- [ ] Set up Stripe webhook endpoint in production
- [ ] Test payment flow end-to-end
- [ ] Configure email service credentials
- [ ] Enable HTTPS/SSL certificate
- [ ] Add success and cancel pages (optional)

## Troubleshooting

### Server won't start
- Check if port 3001 is already in use
- Verify all dependencies are installed
- Check .env file exists and has correct format

### Payment not working
- Verify Stripe keys are correct
- Check browser console for errors
- Ensure server is running on port 3001
- Check network tab for API call failures

### Emails not sending
- Verify Gmail credentials are correct
- Use App Password, not regular password
- Check Gmail security settings

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Express.js Documentation](https://expressjs.com/)
- [Nodemailer Documentation](https://nodemailer.com/)

## Support

For issues or questions:
- Check Stripe Dashboard for payment logs
- Review server.js console output for errors
- Check browser console for frontend errors
- Verify all environment variables are set correctly
