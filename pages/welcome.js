import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appwriteSDK from "../utils";

function welcome() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const getUser = async () => {
    const userData = (await appwriteSDK) && appwriteSDK.account.get();
    userData
      .then((res) => setUser(res))
      .catch((err) => {
        router.push("/");
        console.log(err);
      });
  };
  const logOut = async () => {
    await appwriteSDK.account.deleteSession("current");
    alert("logout successful");
    router.push("/");
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="mb-4">Github Authenticated Page</h1>
        {user && (
          <div>
            <p>
              User:{" "}
              <span className="fs-3 fw-bold text-capitalize">{user.name}</span>
            </p>
            <p>
              Email: <span className="fs-3 fw-normal">{user.email}</span>
            </p>
            <button onClick={logOut} className="btn-danger mt-2 fs-3">
              Log Out
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
export default welcome;
