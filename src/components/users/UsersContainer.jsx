import React from 'react'
import { connect } from 'react-redux'
import { 
    follow, 
    unfollow,
    setCurrentPage,
    toggleFollowingProgres,
    requestUsers,
} from './../../redux/users-reducer'
import Users from './Users'
import Preloader from './../common/preloader/preloader'
import { Navigate } from "react-router-dom"
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux'
import { 
    getUsers, 
    getCurrentPage, 
    getFollowingInProgres, 
    getIsAuth, 
    getIsFetching, 
    getPageSize, 
    getTotalUsersCount 
} from '../../redux/users-selectors'



class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
        
        
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return <>
        
            {this.props.isFetching ? <Preloader /> : null}
            <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              followingInProgres={this.props.followingInProgres}
            />
        </>
    }
}

// const mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgres: state.usersPage.followingInProgres,
//         isAuth: state.auth.isAuth
//     }
// }

const mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgres,
        requestUsers,
    }),
    withAuthRedirect
)(UsersContainer)