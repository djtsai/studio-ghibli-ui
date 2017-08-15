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
