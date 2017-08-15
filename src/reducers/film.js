import * as ActionTypes from '../constants/ActionTypes'

function getInitialState() {
    return {
        id: '',
        title: '',
        description: '',
        director: '',
        producer: '',
        release_date: '',
        rt_score: ''
    }
}

const initialState = getInitialState()

export default function films(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_FILM:
            return action.value
        case ActionTypes.CLEAR_FILM:
            return getInitialState()
        default:
            return state
    }
}
