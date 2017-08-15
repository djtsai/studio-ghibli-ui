import * as ActionTypes from '../constants/ActionTypes'

export default function people(state = [], action) {
    switch (action.type) {
        case ActionTypes.UPDATE_PEOPLE:
            return action.value
        default:
            return state
    }
}
