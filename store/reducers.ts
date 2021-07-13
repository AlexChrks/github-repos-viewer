import { arrayOfRepositoriesType } from "../interfaces/interfaces";

const initialReposState: [] = [];

export const reposReducer = (state: any = initialReposState,  action: any) => {
  switch (action.type) {
    case 'SAVE_REPOSITORIES_TO_STORE':
      return action.payload
    case 'SORT_BY_PARAMETER':
      const stateCopy = [...state];
      const sorted = stateCopy.sort((item1, item2) => {
        if (item1.node[action.payload] > item2.node[action.payload]) {
          return 1
        } else {
          return -1
        }
      })
      return sorted
    case 'CLEAR_REPOSITORIES': 
      return initialReposState
    default:
      return state;
  }
}

const initialEntryData = {
  login: '',
  token: '',
}


export const selectRepositories = ( state: any, filterString: string, filterField: string ) => state.reposReducer.filter((repo: any) => repo.node[filterField].includes(filterString))