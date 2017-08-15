import * as ActionTypes from '../constants/ActionTypes'

export default function speciesList(state = [], action) {
    switch (action.type) {
        case ActionTypes.UPDATE_SPECIES_LIST:
            return action.value
        default:
            return state
    }
}
