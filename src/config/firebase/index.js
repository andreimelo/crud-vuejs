import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey            : env['firebase']['apiKey'],
	authDomain        : env['firebase']['authDomain'],
	projectId         : env['firebase']['projectId'],
	storageBucket     : env['firebase']['storageBucket'],
	messagingSenderId : env['firebase']['messagingSenderId'],
	appId             : env['firebase']['appId'],
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
