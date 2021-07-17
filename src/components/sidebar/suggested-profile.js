import {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SuggestedProfiles({userDocId, username, profileId, userId}){
	const [follwed, setFollowed] = useState(false)

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
		                onClick={() => console.log('Follow this')}
		              > 
		                 Follow
		              </button>
		             
		          </div>
		   </div>
		):null
}



SuggestedProfiles.propTypes = {

	userDocId: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	profileId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,

};