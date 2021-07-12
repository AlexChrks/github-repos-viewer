import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import UserInfo from '../../components/UserInfo/UserInfo'
import ReposList from '../../components/ReposList/ReposList'
import Link from 'next/link'
import Preloader from '../../components/Preloader/Preloader'
import styles from './Repositories.module.css'
import { graphQLQueryBody } from '../../constants/graphQLQueryBody'
import { saveReposToStore } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Repositories: React.FC = () => {

  const dispatch = useDispatch()
  const repos = useSelector<RootState, any>(state => state.reposReducer);

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/graphql', { 
      method: 'post', 
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({
        query: graphQLQueryBody
      })
    }).then((res) => res.json())
   )


   useEffect(() => {
     if ( data && !data.message) {
      dispatch(saveReposToStore(data.data.user.repositories.edges))
     }
   }, [data, dispatch]);


   if (isLoading) return <Preloader/>;
   if (error) return <h1>An error has occurred</h1>;
   
  return (

    data && !data.message && repos 
    ? <div className={styles.repositories_wrapper}>
        <UserInfo username={data.data.user.name} login={data.data.user.login} imageSrc={data.data.user.avatarUrl}/>
        <ReposList reposArr={repos}/>
      </div>
    : <div className={styles.notification_container}>
        <div>Probably you enter invalid Github token</div>
        <Link href="/auth/sign-in">
            <button className="waves-effect waves-light btn">Sign in</button>
        </Link>  
     </div>
  )
}

export default Repositories
