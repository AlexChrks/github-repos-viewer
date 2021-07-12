
import { createStore, combineReducers } from 'redux'
import { reposReducer } from './reducers'

const reducer = combineReducers({reposReducer})
export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>