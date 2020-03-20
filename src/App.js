import React from "react";
import './styles.css';
import UserForm from './components/UserForm';
import NewUser from './components/NewUser';
import { createStore, applyMiddleware } from 'redux';
import { usersReducer as reducer } from './reducers/usersReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import UsersList from './components/UsersList';

const store = createStore( reducer, applyMiddleware(thunk) );

export default function App() {
  return (
    <Provider store = { store } >
      <div>
        <h1>User List</h1>
        <UserForm />
        <UsersList />
        <NewUser />
      </div>
    </Provider>
  );
}
