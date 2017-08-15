import request from 'superagent'

const API_URL = 'https://ghibliapi.herokuapp.com'

export function getFilms() {
    return request.get(`${API_URL}/films`)
}

export function getFilm(id) {
    return request.get(`${API_URL}/films/${id}`)
}

export function getPeople() {
    return request.get(`${API_URL}/people`)
}

export function getPerson(id) {
    return request.get(`${API_URL}/people/${id}`)
}

export function getLocations() {
    return request.get(`${API_URL}/locations`)
}

export function getLocation(id) {
    return request.get(`${API_URL}/locations/${id}`)
}

export function getSpeciesList() {
    return request.get(`${API_URL}/species`)
}

export function getSpecies(id) {
    return request.get(`${API_URL}/species/${id}`)
}
