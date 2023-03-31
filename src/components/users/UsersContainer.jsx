import React from 'react'
import { connect } from 'react-redux'
import { 
    follow, 
    unfollow,
    setCurrentPage,
    toggleFollowingProgres,
    getUsers,
} from './../../redux/users-reducer'
import Users from './Users'
import Preloader from './../common/preloader/preloader'
import { Navigate } from "react-router-dom"
import { withAuthRedirect } from './../../hoc/withAuthRedirect';



class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        
        
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

const mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgres: state.usersPage.followingInProgres,
        isAuth: state.auth.isAuth
    }
}


export default withAuthRedirect (connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgres,
    getUsers,
}) (UsersContainer))

