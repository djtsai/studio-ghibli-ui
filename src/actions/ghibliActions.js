import * as ActionTypes from '../constants/ActionTypes'
import * as API from '../middleware/api'

export function getFilms() {
    return dispatch => {
        API.getFilms().then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_FILMS, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function getFilm(id) {
    return dispatch => {
        API.getFilm(id).then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_FILM, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function clearFilm() {
    return { type: ActionTypes.CLEAR_FILM }
}

export function getPeople() {
    return dispatch => {
        API.getPeople().then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_PEOPLE, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function getPerson(id) {
    return dispatch => {
        API.getPerson(id).then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_PERSON, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function clearPerson() {
    return { type: ActionTypes.CLEAR_PERSON }
}

export function getLocations() {
    return dispatch => {
        API.getLocations().then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_LOCATIONS, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function getLocation(id) {
    return dispatch => {
        API.getLocation(id).then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_LOCATION, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function clearLocation() {
    return { type: ActionTypes.CLEAR_LOCATION }
}

export function getSpeciesList() {
    return dispatch => {
        API.getSpeciesList().then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_SPECIES_LIST, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function getSpecies(id) {
    return dispatch => {
        API.getSpecies(id).then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_SPECIES, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function clearSpecies() {
    return { type: ActionTypes.CLEAR_SPECIES }
}

export function getVehicles() {
    return dispatch => {
        API.getVehicles().then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_VEHICLES, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function getVehicle(id) {
    return dispatch => {
        API.getVehicle(id).then(
            response => {
                dispatch({ type: ActionTypes.UPDATE_VEHICLE, value: response.body })
            },
            error => {
                // I would normally do error handling, but I will assume the API will always return success for this project.
            }
        )
    }
}

export function clearVehicle() {
    return { type: ActionTypes.CLEAR_VEHICLE }
}
