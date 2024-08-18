import React from 'react';
import appwriteSDK from "../utils";
import componentConstants from '../components/constants';

const MainNavbar: React.FC = () => {
  const authRedirect = async () => {
    try {
      await appwriteSDK.account.createOAuth2Session(
        "github",
        "http://localhost:3000/welcome",
        "http://localhost:3000"
      );
    } catch (error) {
      console.error(componentConstants.navbar.oauthError, error);
    }
  };

  return (
    <nav>
      <div className="logo">{componentConstants.navbar.logo}</div>
      <ul>
        <li><button onClick={authRedirect}>Get Started</button></li>
      </ul>
    </nav>
  );
}

export default MainNavbar;