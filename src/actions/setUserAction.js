import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_USERS = 'UPDATE_USERS';
export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';

export const SetData = () => dispatch => {

    axios.put('https://jsonplaceholder.typicode.com/users/1', {
        name: 'Eddie Madrigal'
        })
        .then( res => {
            console.log( res );
        })
        .catch( err => {
            console.log( err );
        });

};