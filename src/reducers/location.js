import * as ActionTypes from '../constants/ActionTypes'

function getInitialState() {
    return {
        id: '',
        name: '',
        climate: '',
        terrain: '',
        surface_water: '',
        residents: [],
        films: []
    }
}

const initialState = getInitialState()

export default function location(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_LOCATION:
            return action.value
        case ActionTypes.CLEAR_LOCATION:
            return getInitialState()
        default:
            return state
    }
}
