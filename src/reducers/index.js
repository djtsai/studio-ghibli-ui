import { combineReducers } from 'redux'
import film from './film'
import films from './films'
import person from './person'
import people from './people'
import location from './location'
import locations from './locations'
import species from './species'
import speciesList from './speciesList'
import vehicle from './vehicle'
import vehicles from './vehicles'

const rootReducer = combineReducers({
    film,
    films,
    person,
    people,
    location,
    locations,
    species,
    speciesList,
    vehicle,
    vehicles
})

export default rootReducer
