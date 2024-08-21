import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout: React.FC = () => {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          { name: 'OrestAI Product', price: 20, quantity: 1 },
        ],
      }),
    });

    const { id } = await res.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: id });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Button variant="danger" className="mt-2" onClick={handleCheckout}>Proceed to Checkout</Button>
    </div>
  );
};

export default Checkout;