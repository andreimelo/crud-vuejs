import { db, firebaseTimeStamp } from '../../config/firebase';
import {
	addDoc,
	getDocs,
	deleteDoc,
	collection,
	doc,
	updateDoc,
} from 'firebase/firestore';

const addUser = async (values) => {
	try {
		const docRef = await addDoc(collection(db, 'users'), {
			...values,
			timeStamp : firebaseTimeStamp,
		});
		return docRef;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const getUser = async () => {
	try {
		const querySnapshot = await getDocs(collection(db, 'users'));
		const users = querySnapshot.docs.map((doc) => ({
			id : doc.id,
			...doc.data(),
		}));
		return users;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const deleteUser = async (userId) => {
	try {
		const userDocRef = doc(db, 'users', userId);
		const docRef = await deleteDoc(userDocRef);
		return docRef;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const updateUser = async (userId, values) => {
	try {
		const userDocRef = doc(db, 'users', userId);
		const docRef = await updateDoc(userDocRef, values);
		return docRef;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export { addUser, getUser, deleteUser, updateUser };
