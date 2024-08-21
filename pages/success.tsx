import React from 'react';
import styles from "../styles/Home.module.css";
import { Button } from 'react-bootstrap';
import { useRouter } from "next/router";

const Success: React.FC = () => {
    const router = useRouter();
    const redirectToDashboard = () => {
        router.push('/dashboard');
      };
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <div className="welcome-card">
                <h1 className="mb-4">Your payment completed successfully!</h1>
                <p>Paid Amount: $20</p>
                <hr></hr>
                <Button onClick={redirectToDashboard}>Go to Dashboard</Button>
            </div>
        </main>
    </div>
  );
};

export default Success;