import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (user, history) => dispatch => {
    axios.post('http://localhost:3016/auth/signup', user)
        .then(res => history.push('/login'))
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:3016/auth/signup', user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}