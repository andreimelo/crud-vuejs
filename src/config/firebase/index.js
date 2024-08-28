import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { env } from '../env';

const firebaseConfig = {
	apiKey            : env['firebase']['apiKey'],
	authDomain        : env['firebase']['authDomain'],
	databaseURL       : env['firebase']['databaseURL'],
	projectId         : env['firebase']['projectId'],
	storageBucket     : env['firebase']['storageBucket'],
	messagingSenderId : env['firebase']['messagingSenderId'],
	appId             : env['firebase']['appId'],
	measurementId     : env['firebase']['measurementId'],
};
// console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const firebaseTimeStamp = serverTimestamp();

export { db, firebaseTimeStamp };
