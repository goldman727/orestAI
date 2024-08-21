import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appwriteSDK from "../utils";
import { Button } from 'react-bootstrap';
import coreConstants from "./core.Constants";

interface User {
  name: string;
  email: string;
}

const Welcome: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const getUser = async () => {
    try {
      const userData = await appwriteSDK.account.get();
      setUser(userData);
    } catch (err) {
      router.push("/");
      console.log(err);
    }
  };

  const logOut = async () => {
    try {
      await appwriteSDK.account.deleteSession("current");
      alert("logout successful");
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const redirectToCheckOut = () => {
    router.push('/checkout');
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="welcome-card">
          <h1 className="mb-4">{coreConstants.welcome.title}</h1>
          {user && (
            <div>
              <p>
                {coreConstants.welcome.user}:{" "}
                <span className="fs-5 fw-bold text-capitalize">{user.name}</span>
              </p>
              <p>
                {coreConstants.welcome.email} <span className="fs-5 fw-normal">{user.email}</span>
              </p>
              <Button variant="primary" className="mt-5" onClick={redirectToCheckOut}>{coreConstants.welcome.checkout}</Button>
              <Button variant="outline-light" className="mt-5" onClick={logOut}>{coreConstants.welcome.logOut}</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Welcome;