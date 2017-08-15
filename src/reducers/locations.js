import * as ActionTypes from '../constants/ActionTypes'

export default function locations(state = [], action) {
    switch (action.type) {
        case ActionTypes.UPDATE_LOCATIONS:
            return action.value
        default:
            return state
    }
}
