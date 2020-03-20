import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_USERS = 'UPDATE_USERS';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {

    const newData = 'Eddie';

    axios
        .post(`http://jsonplaceholder.typicode.com/users`, newData)
        .then( res => {
            console.log(res)
        })
        .catch( err => console.log( err ))

    axios
        .get( `http://jsonplaceholder.typicode.com/users` )
        .then( res => {
            console.log(res.data);
            dispatch({ type: UPDATE_USERS, payload: res.data })  
        })
        .catch( err => {
            console.log( err );
            dispatch({ type: SET_ERROR, payload: 'Error fetching data from the API' });
        });

    
};