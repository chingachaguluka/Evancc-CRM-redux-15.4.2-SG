import React from 'react';
import axios from 'axios';

export const FETCH_COMPLAINTS = 'FETCH_COMPLAINTS';
export const FETCH_COMPLAINT = 'FETCH_COMPLAINT';
export const CREATE_COMPLAINT = 'CREATE_COMPLAINT';
export const UPDATE_COMPLAINT = 'UPDATE_COMPLAINT';
export const DELETE_COMPLAINT = 'DELETE_COMPLAINT';

const ROOT_URL = 'http://localhost:2403/';

export function fetchComplaints() {
    const url = `${ROOT_URL}complaints`;
    let request = axios.get(url);

    return {
        type: FETCH_COMPLAINTS,
        payload: request
    }
}

export function fetchComplaint(id) {
    const url = `${ROOT_URL}complaints/${id}`;
    let request = axios.get(url);

    return {
        type: FETCH_COMPLAINT,
        payload: request
    }
}

export function createComplaint(props) {
    const url = `${ROOT_URL}complaints`;
    let request = axios.post(url, props);
    //console.log(request);

    return {
        type: CREATE_COMPLAINT,
        payload: request
    }
}

export function updateComplaint(props, id) {
    const url = `${ROOT_URL}complaints/${id}`;
    let request = axios.put(url, props);
    //console.log(props);

    return {
        type: UPDATE_COMPLAINT,
        payload: request
    }
}

export function deleteComplaint(id) {
    const url = `${ROOT_URL}complaints/${id}`;;
    let request = axios.delete(url);
    //console.log(props);

    return {
        type: DELETE_COMPLAINT,
        payload: request
    }
}
