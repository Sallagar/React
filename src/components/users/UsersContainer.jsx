import React from 'react'
import { connect } from 'react-redux'
import { 
    follow, 
    unfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleIsFetching,
    toggleFollowingProgres,
} from './../../redux/users-reducer'
import Users from './Users'
import Preloader from './../common/preloader/preloader'
import { userAPI } from '../../api/api'

class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.toggleIsFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => { 
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        
        userAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => { 
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        });
    }

    render() {
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
              toggleFollowingProgres={this.props.toggleFollowingProgres}
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
        followingInProgres: state.usersPage.followingInProgres
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgres
}) (UsersContainer)

