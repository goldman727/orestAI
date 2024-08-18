import { Appwrite } from "appwrite";

const appwriteSDK = new Appwrite();
appwriteSDK
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66bf553a000ca395ff65");

export default appwriteSDK;
