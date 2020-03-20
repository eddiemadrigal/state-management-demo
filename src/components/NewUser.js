import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/userActions';

const UserForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
        <form onSubmit={handleGetData}>
        <label>
            First Name:
            <input
            type="text"
            value=""
            onChange=""
            />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );

};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(UserForm);