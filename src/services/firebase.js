import {firebase, FieldValue} from '../lib/firebase';

export async function doesUsernameExist(username) {
	// body...
	const result = await firebase.firestore().collection('users').where('username', '==', username).get();
     
	return result.docs.map((user) => user.data().length > 0);
}


//get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
	// body...
	const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();

	const user = result.docs.map((item) =>({
		...item.data(),
		docId: item.id

	}));

	return user;


}

export async function getSusggestProfiles(userId, following) {
	const result = await firebase.firestore().collection('users').limit(10).get();
    
    
    
    
	return result.docs.map((user) => ({
		...user.data(), 
		docId:user.id
	})).filter((profile) => profile.userId !== userId && !following.includes(profile.userId));


}