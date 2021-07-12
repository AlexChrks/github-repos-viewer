export const saveReposToStore = (reposArr: any) => {
  return {
    type: 'SAVE_REPOSITORIES_TO_STORE',
    payload: reposArr
  }
}

export const sortByParameter = (param: string) => {
  return {
    type: 'SORT_BY_PARAMETER',
    payload: param
  }
}

export const clearRepositories = () => {
  return {
    type: 'CLEAR_REPOSITORIES',
  }
}
