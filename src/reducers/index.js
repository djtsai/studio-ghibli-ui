import { combineReducers } from 'redux'
import film from './film'
import films from './films'
import person from './person'
import people from './people'
import location from './location'
import locations from './locations'

const rootReducer = combineReducers({
    film,
    films,
    person,
    people,
    location,
    locations
})

export default rootReducer
