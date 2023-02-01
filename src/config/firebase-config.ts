import * as firebaseAdmin from "firebase-admin";
import * as serviceAccount from "../../service-account.json";

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    serviceAccount as firebaseAdmin.ServiceAccount
  ),
});

export default firebaseAdmin;
