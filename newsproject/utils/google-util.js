// import { google } from 'googleapis';

// /*******************/
// /** CONFIGURATION **/
// /*******************/

// const googleConfig = {
//   clientId: "555516225382-cv0oact7436lr4qi82smuqjrdd64spgl.apps.googleusercontent.com", // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
//   clientSecret: "PjkQoR_PQ_7kfJCRPxFaAOKR", // e.g. _ASDFA%DFASDFASDFASD#FAD-
//   redirect: "/", // this must match your google api settings
// };

// const defaultScope = [
//   'https://www.googleapis.com/auth/plus.me',
//   'https://www.googleapis.com/auth/userinfo.email',
// ];

// /*************/
// /** HELPERS **/
// /*************/

// function createConnection() {
//   return new google.auth.OAuth2(
//     googleConfig.clientId,
//     googleConfig.clientSecret,
//     googleConfig.redirect
//   );
// }

// function getConnectionUrl(auth) {
//   return auth.generateAuthUrl({
//     access_type: 'offline',
//     prompt: 'consent',
//     scope: defaultScope
//   });
// }

// function getGooglePlusApi(auth) {
//   return google.plus({ version: 'v1', auth });
// }

// /**********/
// /** MAIN **/
// /**********/

// /**
//  * Part 1: Create a Google URL and send to the client to log in the user.
//  */
// function urlGoogle() {
//   const auth = createConnection();
//   const url = getConnectionUrl(auth);
//   return url;
// }

// /**
//  * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
//  */
// function getGoogleAccountFromCode(code) {
//   const data = await auth.getToken(code);
//   const tokens = data.tokens;
//   const auth = createConnection();
//   auth.setCredentials(tokens);
//   const plus = getGooglePlusApi(auth);
//   const me = await plus.people.get({ userId: 'me' });
//   const userGoogleId = me.data.id;
//   const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
//   return {
//     id: userGoogleId,
//     email: userGoogleEmail,
//     tokens: tokens,
//   };
// }