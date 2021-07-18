import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {updateLoggedInUserFollowing, updateFollowedUserFollowers} from '../../services/firebase'

export default function SuggestedProfiles({profileDocId, username, profilId, userId,loggedInUserDocId}){
	const [follwed, setFollowed] = useState(false);

	async function handleFollowUser() {

		setFollowed(true);
		// update the following array of the logged in user(in this, my profile)
		// update the followers array of the user who has been followed
		await updateLoggedInUserFollowing(loggedInUserDocId, profilId, false);

		await updateFollowedUserFollowers(profileDocId, userId, false)
	}



	return !follwed ? (
		   <div className="flex flex-row items-center align-items justify-between">
		      <div className="flex items-center justify-between">
		         <img className="rounded-full w-8 flex mr-3"
		              src={`/images/avatar/${username}.jpg`}
		              alt="" />

		          <Link to={`/p/${username}`}>
		             <p className="font-bold tex-sm">{username}</p>
		          </Link>
		      </div> 
		      
		          <div>

		              <button className="text-xs font-bold text-blue-medium"
		                type="button"
		                onClick={handleFollowUser}
		              > 
		                 Follow
		              </button>
		             
		          </div>
		   </div>
		):null
}



SuggestedProfiles.propTypes = {

	profileDocId: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	profileId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	loggedInUserDocId: PropTypes.string.isRequired

};