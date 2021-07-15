import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


export default function User({username, fullName}) => 
   !username || !fullName ? (
   	   <Skeleton count={1} height={61} />
   	): (
   	    <Link to={`p/${username}`} className="grid">
   	    
   	        <p>{username} </p>

   	    </Link>
   	)


User.PropTypes = {
	username: PropTypes.string,
	fullName: PropTypes.string
}
