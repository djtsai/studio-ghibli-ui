import * as ActionTypes from '../constants/ActionTypes'

function getInitialState() {
    return {
        id: '',
        name: '',
        description: '',
        vehicle_class: '',
        length: '',
        pilot: '',
        films: ''
    }
}

const initialState = getInitialState()

export default function vehicle(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_VEHICLE:
            return action.value
        case ActionTypes.CLEAR_VEHICLE:
            return getInitialState()
        default:
            return state
    }
}
