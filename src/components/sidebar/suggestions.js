import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {getSusggestProfiles} from '../../services/firebase';
import  SuggestedProfiles from './suggested-profile'

export default function Suggestions({userId, following, loggedInUserDocId}){
	const [profiles, setProfiles] = useState(null);

    // go ahead and get the suggested profiles
    useEffect(() => {
    	async function suggestedProfiles() {
    		const response = await getSusggestProfiles(userId, following);
    		setProfiles(response);
    	}

    	if(userId){
    		suggestedProfiles();
    	}

    	console.log(profiles);
    	

    },[userId])
    //  use the firebase service
    // getSuggestedProfiles
    // call the async function ^^^^^  within useEffect
    // store it in state
    // go ahead and render (wait on the profiles as in 'skeleton')



	return !profiles ? (
		<Skeleton count={1} height={150} className="mt-5" />

	): profiles.length > 0 ? (
	   <div className="rounded flex flex-col">
	      <div className="text-sm flex items-center align-items justify-between mb-2">
	          <p className="font-bold text-gray-base">Suggestions for you</p>
	      </div>
	      <div className="mt-4 grid gap-5">
	         {profiles.map((profile) => (
	         	<SuggestedProfiles
	         	   key={profile.docId}
	         	   profileDocId={profile.docId}
	         	   profilId={profile.userId}
	         	   userId={userId}
	         	   username={profile.username}
	         	   loggedInUserDocId={loggedInUserDocId}

	         	/>
	         ))}


	      </div>
	      

	   </div>

	) : null;
}

Suggestions.propTypes ={
	useId: PropTypes.string,
	following: PropTypes.array,
	loggedInUserDocId: PropTypes.string
}