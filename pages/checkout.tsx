import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

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
          { name: 'Product 1', price: 2000, quantity: 1 },
          { name: 'Product 2', price: 1500, quantity: 2 },
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
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;