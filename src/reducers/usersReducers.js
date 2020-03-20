import { FETCH_DATA, UPDATE_USERS, SET_ERROR } from '../actions/userActions';

const initialState = {
    users: [],
    isFetchingData: false,
    error: ''
};

export const usersReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                users: []
            };
        case UPDATE_USERS: 
            return {
                ...state,
                users: action.payload,
                isFetchingData: false
            };
        case SET_ERROR: 
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};