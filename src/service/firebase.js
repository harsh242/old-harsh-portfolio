import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/analytics';
import 'firebase/firebase-database';

const firebaseConfig = {
    apiKey: "AIzaSyAAEtmjlKJ1Jx0SPqsRs8FXPNvUTjce2nw",
    authDomain: "harshbadhai.firebaseapp.com",
    databaseURL: "https://harshbadhai.firebaseio.com",
    projectId: "harshbadhai",
    storageBucket: "harshbadhai.appspot.com",
    messagingSenderId: "985779697045",
    appId: "1:985779697045:web:c6f8d3218dc5ac0133f29c",
    measurementId: "G-1N93VZ3E63"
  };

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		//this.auth = app.auth()
    app.analytics();
	}

}

export default new Firebase();