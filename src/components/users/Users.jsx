import React from "react"
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"
import axios from 'axios'


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
                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f02c7f75-61ce-4757-8f6e-8de98338add1'
                                    },
                                })
                                .then(response => { 
                                    if (response.data.resultCode === 0) {
                                      props.unfollow(u.id);
                                    }
                                });
                            }}>Unfollow</button> 
                        : <button onClick={() => {
                            axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f02c7f75-61ce-4757-8f6e-8de98338add1'
                                    },
                                })
                                .then(response => { 
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
