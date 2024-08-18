import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appwriteSDK from "../utils";
import { Button } from 'react-bootstrap';

interface User {
  name: string;
  email: string;
}

const title = "Welcome";
const User = "User";
const email = "Email";
const logOutButton = "Log Out";
const loggedOutMessage = "You have been logged out";


const Welcome: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await appwriteSDK.account.get();
        setUser(userData);
      } catch (err) {
        router.push("/");
        console.log(err);
      }
    };
  
    getUser();
  }, [router]);

  const logOut = async () => {
    try {
      await appwriteSDK.account.deleteSession("current");
      alert({loggedOutMessage});
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="mb-4">{title}</h1>
        {user && (
          <div>
            <p>
              {User}{" "}
              <span className="fs-3 fw-bold text-capitalize">{user.name}</span>
            </p>
            <p>
              {email} <span className="fs-3 fw-normal">{user.email}</span>
            </p>
            <Button variant="primary" className="mt-3" onClick={logOut}>{logOutButton}</Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Welcome;