import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer"
import {
    useLocation,
    useNavigate,
    useParams 
} from "react-router-dom"
import { Navigate } from "react-router-dom"
import { compose } from "redux"

class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
        <Profile {...this.props} 
            profile = {this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
    
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

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)