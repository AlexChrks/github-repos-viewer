import React, {useEffect, useState} from "react";
import RepositoryItem from "./ReposItem/RepositoryItem";
import {useDispatch} from 'react-redux'
import { sortByParameter } from "../../store/actions";
import TablePagination from '@material-ui/core/TablePagination';
import { arrayOfRepositoriesType, repoInterface } from "../../interfaces/interfaces";

import styles from './ReposList.module.css'

interface ReposListPropsInterface {
  reposArr: arrayOfRepositoriesType;
}


const ReposList: React.FC<ReposListPropsInterface> = ({ reposArr }) => {
  const dispatch = useDispatch();  

  const [repos, setRepos] = useState(reposArr);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setRepos([...reposArr])
  }, [reposArr]);

  const filterByRepoOwner = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRepos(reposArr.filter(repo => repo.node.owner.login.toLowerCase().includes(event.target.value.toLowerCase())) )
  }

  const filterByRepoName = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRepos(reposArr.filter(repo => repo.node.name.toLowerCase().includes(event.target.value.toLowerCase())) )
  }

  const sortTable = (event: any) => {
    switch(event.target.innerText) {
      case 'Repo name':
        dispatch(sortByParameter('name'))
        break;
      case 'Creation Date':
        dispatch(sortByParameter('createdAt'))
        break;
      case 'Updated':
        dispatch(sortByParameter('updatedAt'))
        break;
      case 'Stars':
        dispatch(sortByParameter('stargazerCount'))
        break;  
      case 'Size':
        dispatch(sortByParameter('diskUsage'))
        break;    
    }

  }

  const getInterval = (page: number, rowsPerPage : number)=>{
    return{
      start:(page + 1) * rowsPerPage - rowsPerPage,
      end:rowsPerPage * (page + 1)
    }
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const interval = getInterval(page,rowsPerPage)

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters_container}>
        <input className={styles.fliter_input} type="text" placeholder='filter by repo owner' onChange={filterByRepoOwner} />
        <input className={styles.fliter_input} type="text" placeholder='filter by repo name' onChange={filterByRepoName}/>
      </div>
      <table>
        <thead onClick={sortTable} className={styles.table_head}>
          <tr>
            <td>Repo name</td>
            <td>Creation Date</td>
            <td>Updated</td>
            <td>Stars</td>
            <td>Size</td>
          </tr>
        </thead>

      <tbody>
        {
        repos.slice(interval.start, interval.end).map((repository: repoInterface) => (
          <RepositoryItem
            key={repository.node.id}
            repoName={repository.node.name}
            updatedAt={repository.node.updatedAt}
            starsCount={repository.node.stargazerCount}
            createdAt={repository.node.createdAt}
            size={repository.node.diskUsage}
            repoID={repository.node.id}
            repoOwner={repository.node.owner.login}
          />
        ))}
      </tbody>

        <TablePagination
          component="tfoot"
          count={repos.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </table>
    </div>
  )}

export default ReposList;
