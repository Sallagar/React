import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { setUserProfile } from "../../redux/profile-reducer"
import { 
    useLocation,
    useNavigate,
    useParams 
} from "react-router-dom"
import { userAPI } from "../../api/api"

class ProfileContainer extends React.Component {
    
    componentDidMount () {
       
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 28489
        }
        userAPI.getProfile(userId)
        .then(response => { 
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
        <Profile {...this.props} profile = {this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

function withRouter(Component) {

	function ComponentWithRouterProp(props) {
		 let location = useLocation();
		 let navigate = useNavigate();
		 let params = useParams();
		 return (
			  <Component
					{...props}
					router={{ location, navigate, params }}
			  />
		 );
	}

	return ComponentWithRouterProp;
}

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));