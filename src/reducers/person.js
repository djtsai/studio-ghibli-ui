import * as ActionTypes from '../constants/ActionTypes'

function getInitialState() {
    return {
        id: '',
        name: '',
        gender: '',
        age: '',
        eye_color: '',
        hair_color: '',
        films: [],
        species: ''
    }
}

const initialState = getInitialState()

export default function person(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_PERSON:
            return action.value
        case ActionTypes.CLEAR_PERSON:
            return getInitialState()
        default:
            return state
    }
}
