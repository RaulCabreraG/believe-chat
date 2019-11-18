import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBf_NUTOD6KFkINDvXkdZ_KuAMimWTSA-c",
  authDomain: "chat-database-64d93.firebaseapp.com",
  databaseURL: "https://chat-database-64d93.firebaseio.com",
  projectId: "chat-database-64d93",
  storageBucket: "chat-database-64d93.appspot.com",
  messagingSenderId: "506708424059",
  appId: "1:506708424059:web:6464d9c9cf18e7ddb879de",
  measurementId: "G-D227E03WG2"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;