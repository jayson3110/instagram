import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';



export default function IsUserLoggedIn({user, LoggedInPath, children, ...rest}) {
	return(
	   <Route
		{...rest}
		render={({ location }) => {
			if (!user) {
				return children;
			}
			if(user) {
				return(
					<Redirect to={{ pathname: LoggedInPath, state: { from: location } }} />
				)
			}
			return null;
		}}
		/>

	)

}

IsUserLoggedIn.propTypes = {
	user:PropTypes.object,
	children: PropTypes.object.isRequired,
	LoggedInPath: PropTypes.string.isRequired
}