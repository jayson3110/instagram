import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';


export default function Header({photosCount, profile,followerCount,setFollowerCount}) {
	const [isFollowing, setIsFollowingProfile] = useState(false);

	return null;
	

}

Header.propTypes={
	photosCount: PropTypes.number.isRequired,
	followerCount: PropTypes.number.isRequired,
	setFollowerCount: PropTypes.func.isRequired,
	profile: PropTypes.shape({
		docId: PropTypes.string,
		useId: PropTypes.string,
		fullName: PropTypes.string,
		following: PropTypes.array
	}).isRequired

}