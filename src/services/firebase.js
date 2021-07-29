import {firebase, FieldValue} from '../lib/firebase';

export async function doesUsernameExist(username) {
	// body...
	const result = await firebase.firestore().collection('users').where('username', '==', username).get();
     
	return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUsername(username) {
	// body...
	const result = await firebase.firestore().collection('users').where('username', '==', username).get();
     const user =  result.docs.map((item) => ({
     	...item.data(),
     	docId: item.id
     }));
	return user;
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


// updateLoggedInUserFollowing, updateFollowedUserFollowers


export async function updateLoggedInUserFollowing(loggedInUserDocId, profilId, isFollowingProfile) {
	return firebase.firestore().collection('users').doc(loggedInUserDocId).update({
		following: isFollowingProfile
		? FieldValue.arrayRemove(profilId) : FieldValue.arrayUnion(profilId)
	});
}

export async function updateFollowedUserFollowers(profileDocId, loggedInUserDocId, isFollowingProfile) {
	return firebase.firestore().collection('users').doc(profileDocId).update({
		followers: isFollowingProfile
		? FieldValue.arrayRemove(loggedInUserDocId) : FieldValue.arrayUnion(loggedInUserDocId)
	});
}


export async function getPhotos(userId, following) {
	const result = await firebase.firestore().collection('photos').where('userId', 'in', following).get();

	const usersFollowedPhotos = result.docs.map((photo) => ({
		...photo.data(),
		docId: photo.id
	}));

	const photosWithUserDetails = await Promise.all(
		usersFollowedPhotos.map(async (photo) => {
			let userLikedPhoto = false;
			if(photo.likes.includes(userId)) {
				userLikedPhoto = true;
			}
			const user = await getUserByUserId(photo.userId);
			const { username } = user[0];
			return {username, ...photo, userLikedPhoto};
		})
	);
	return photosWithUserDetails;




}



export async function getUserPhotosByUsername(username) {
	const [user] = await getUserByUsername(username);
	const result = await firebase.firestore().collection('photos').where('userId', '==', user.userId).get();
	const photos = result.docs.map((item) => ({
		...item.data(),
		docId: item.id

	}));

	return photos;
}


export async function isUserFollowingProfile(loggedInUserUsername, profileUserId) {
	// body...
	const result = await firebase.firestore().collection('users').where("username", '==', loggedInUserUsername).where('following', 'array-contains', profileUserId).get();

	const [response = {}] = result.docs.map((item) => ({
		...item.data(),
		docId: item.id
	}));
	return response.userId;
}