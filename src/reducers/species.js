import * as ActionTypes from '../constants/ActionTypes'

function getInitialState() {
    return {
        id: '',
        name: '',
        classification: '',
        eye_colors: '',
        hair_colors: '',
        people: [],
        films: []
    }
}

const initialState = getInitialState()

export default function species(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_SPECIES:
            return action.value
        case ActionTypes.CLEAR_SPECIES:
            return getInitialState()
        default:
            return state
    }
}
