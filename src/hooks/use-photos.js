import {useState, useEffect, useContext} from 'react'
import UserContext from '../context/user';
import {getPhotos, getUserByUserId} from '../services/firebase';

export default function usePhotos() {
	const [photos, setPhotos] = useState(null);

	const {
		user: {uid: userId = ''}

	} = useContext(UserContext);

	useEffect(() => {
		async function getTimeLinePhotos() {
			const [ {following} ] =  await getUserByUserId(userId);
			let followedUserPhotos = [];

			console.log(following);
			// do the user actually follow people?
			if (following.length > 0) {
				followedUserPhotos = await getPhotos(userId, following);
			}

			// Re-arrange array to be newest photos first by dateCreated
			followedUserPhotos.sort((a,b) => b.dateCreated - a.dataCreated);
			setPhotos(followedUserPhotos);


		}

		getTimeLinePhotos()
	}, [userId])

	return { photos }
}