import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCljfvWgE_XIhlgo5zT9YbT5pGMWfn6wCo',
  authDomain: 'loginreactshop.firebaseapp.com',
  databaseURL: 'https://loginreactshop.firebaseio.com',
  projectId: 'loginreactshop',
  storageBucket: 'loginreactshop.appspot.com',
  messagingSenderId: '347660688304',
  appId: '1:347660688304:web:2dbec20e23a69093211475',
};
// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);
export default Fire;
