import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {getSusggestProfiles} from '../../services/firebase';


export default function Suggestions({userId, following}){
	const [profiles, setProfiles] = useState(null);

    // go ahead and get the suggested profiles
    useEffect(() => {
    	async function suggestedProfiles() {
    		const response = await getSusggestProfiles(userId, following);
    		console.log(response)
    		setProfiles(response);
    	}
    	if(userId){
    		getSusggestProfiles();
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
	      

	   </div>

	) : null;
}

Suggestions.propTypes ={
	useId: PropTypes.string,
	following: PropTypes.array
}