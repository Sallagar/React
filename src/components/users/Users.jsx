import React from "react"
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"
// import { userAPI } from '../../api/api'


const Users = (props) => {

    const pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? 
                styles.selectedPage : undefined}
                onClick={(e) => 
                    {props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src= {user.photos.small != null ? user.photos.small 
                        : userPhoto} alt="img" className={styles.userPhoto}
                        />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                        ? <button disabled={props.followingInProgres
                        .some(id => id === user.id)} 
                            onClick={() => {props.unfollow(user.id)}}>
                                Unfollow</button> 
                        : <button disabled={props.followingInProgres.some(id => id === user.id)} 
                            onClick={() => {props.follow(user.id)}}>
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }   
    </div>
}

export default Users
