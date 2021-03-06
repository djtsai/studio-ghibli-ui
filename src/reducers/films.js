import * as ActionTypes from '../constants/ActionTypes'

export default function films(state = [], action) {
    switch (action.type) {
        case ActionTypes.UPDATE_FILMS:
            return action.value
        default:
            return state
    }
}
