import { db, firebaseTimeStamp } from '../../config/firebase';
import { addDoc, getDocs, deleteDoc, collection, doc } from 'firebase/firestore';

export const addUser = async (values) => {
	try {
		const docRef = await addDoc(collection(db, 'users'), {
			...values,
			timeStamp : firebaseTimeStamp,
		});
		console.log('User details added successfully with ID:', docRef.id);
		return docRef;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getUser = async () => {
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

export const deleteUser = async (userId) => {
	try {
		const userDocRef = doc(db, 'users', userId);
		const docRef = await deleteDoc(userDocRef);
		return docRef;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
