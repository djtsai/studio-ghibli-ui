import { combineReducers } from 'redux'
import film from './film'
import films from './films'
import person from './person'
import people from './people'

const rootReducer = combineReducers({
    film,
    films,
    person,
    people
})

export default rootReducer
