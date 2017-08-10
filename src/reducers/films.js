import * as ActionTypes from '../constants/ActionTypes'

const initialState = []

export default function films(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_FILMS:
            return action.value
        default:
            return state
    }
}
