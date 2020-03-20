import React from 'react';
import { connect } from 'react-redux';

const UsersList = props => {
    return (
        <>
            { props.error ? (
                <div>{ props.error }</div>
            ) : (
                props.users.map(user => <div key={ user.id } >{user.name}</div>)
            )}
        </>
    );
}; 

const mapStateToProps = state => {
    return {
        users: state.users,
        error: state.error
    };
}; 

export default connect(
    mapStateToProps,
    {}
)(UsersList);