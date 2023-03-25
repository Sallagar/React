import React from "react"
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"
import { userAPI } from '../../api/api'


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
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src= {u.photos.small != null ? u.photos.small 
                        : userPhoto} alt="img" className={styles.userPhoto}
                        />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => {
                            userAPI.unfollowUsers (u).then(response => { 
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id);
                                }
                            });
                        }}>Unfollow</button> 
                        : <button onClick={() => {
                            userAPI.followUsers (u).then(response => { 
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)  
                                }
                                });
                            props.follow (u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
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
