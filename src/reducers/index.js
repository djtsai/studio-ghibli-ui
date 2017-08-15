import { combineReducers } from 'redux'
import film from './film'
import films from './films'
import person from './person'
import people from './people'
import location from './location'
import locations from './locations'
import species from './species'
import speciesList from './speciesList'

const rootReducer = combineReducers({
    film,
    films,
    person,
    people,
    location,
    locations,
    species,
    speciesList
})

export default rootReducer
