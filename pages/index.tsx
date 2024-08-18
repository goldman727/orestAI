import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import appwriteSDK from "../utils";
import MainNavbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

const title = "Appwrite Authentication with Github";
const description = "This is a simple app that demonstrates Appwrite authentication with Github.";

const Home: React.FC = () => {
  const authRedirect = async () => {
    try {
      await appwriteSDK.account.createOAuth2Session(
        "github",
        "http://localhost:3000/welcome",
        "http://localhost:3000"
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="body">
      <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;