import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
import styles from "../styles/Home.module.css";

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
        <div className={styles.container}>
            <main className={styles.main}>
                <div className="welcome-card">
                    <p>Up to 75% off </p>
                    <h1 className="mb-4">PR code Review with AI</h1>
                    <p>All inclusive plan</p>
                    <p>Based on GitHub users</p>
                    <p>$20/month</p>
                    <p>/user/month</p>
                    <hr></hr>
                    <Button variant="danger" className="mt-5" onClick={handleCheckout}>CheckOut</Button>
                </div>
            </main>
        </div>
    );
};

export default Checkout;