import * as ActionTypes from '../constants/ActionTypes'

export default function vehicles(state = [], action) {
    switch (action.type) {
        case ActionTypes.UPDATE_VEHICLES:
            return action.value
        default:
            return state
    }
}
