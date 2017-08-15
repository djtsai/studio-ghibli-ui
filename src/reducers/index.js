import { combineReducers } from 'redux'
import film from './film'
import films from './films'

const rootReducer = combineReducers({
    film,
    films
})

export default rootReducer
