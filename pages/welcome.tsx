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

  // const createPost = async () => {
  //   await fetch('/api/posts/create', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ user.name, user.email }),
  //   });
  // };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="mb-4">{coreConstants.welcome.title}</h1>
        {user && (
          <div>
            <p>
              {coreConstants.welcome.user}:{" "}
              <span className="fs-3 fw-bold text-capitalize">{user.name}</span>
            </p>
            <p>
              {coreConstants.welcome.email} <span className="fs-3 fw-normal">{user.email}</span>
            </p>
            <Button variant="primary" className="mt-3" onClick={logOut}>{coreConstants.welcome.logOut}</Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Welcome;