import React from 'react'
import {useRouter} from 'next/router'
import { clearRepositories } from '../../store//actions'
import {useDispatch} from 'react-redux'

import styles from './UserInfo.module.css';


interface userInfoPropsInterface {
  imageSrc: string,
  username: string,
  login: string
}

const UserInfo: React.FC<userInfoPropsInterface> = ({imageSrc, username, login}) => {

  const router = useRouter()
  const dispatch = useDispatch();

  const signOut = () => {
    localStorage.clear();
    dispatch(clearRepositories())
    router.push('auth/sign-in')
  }

  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.card} >
        <img src={imageSrc}/>
        <span className="card-title">{username}</span>
        <p>{login}</p>
      </div>
      <button onClick={signOut} className="waves-effect waves-light btn">Sing out</button>
    </div>
  )
}

export default UserInfo;
