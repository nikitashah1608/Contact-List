import * as actionTypes from './actionTypes';
import axios from 'axios';

export const contactAdditionSuccess = (data) => {
    return {
        type: actionTypes.CONTACT_ADD_SUCCESS,
        data: data
    };
}

export const contactAdditionFail = (error) => {
    return {
        type: actionTypes.CONTACT_ADD_ERROR,
        error: error
    };
}

export const AddContact = (data) => {
    return dispatch => {;
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            dispatch(contactAdditionSuccess(response.data));
        })
        .catch(error => {
            dispatch(contactAdditionFail(error))
        });
    }
};

export const fetchUsersSuccess = ( data ) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        data: data
    };
};

export const fetchUsersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    };
};

export const fetchContactsAction = () => {
    return dispatch => {
        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( res => {
                const users = [];
                for ( let key in res.data ) {
                    users.push( {
                        ...res.data[key]
                    } );
                }
                dispatch(fetchUsersSuccess(users));
            } )
            .catch( err => {
                dispatch(fetchUsersFail(err));
            } );
    };
};

export const removeUsersSuccess = (data) => {
    return {
        type: actionTypes.REMOVE_USERS_SUCCESS,
        data: data
    };
}

export const removeUsersFail = (err) => {
    return {
        type: actionTypes.REMOVE_USERS_FAIL,
        error: err
    };
}

export const removeContact = (id) => {
    return dispatch => {
        axios.delete( 'https://jsonplaceholder.typicode.com/users', id )
            .then( res => {
                const users = [];
                for ( let key in res.data ) {
                    users.push( {
                        ...res.data[key]
                    } );
                }
                dispatch(removeUsersSuccess(users));
            } )
            .catch( err => {
                dispatch(removeUsersFail(err));
            } );
    };
};

export const editStart = () => {
    return {
        type: actionTypes.EDIT_START
    }
}

export const editUsersSuccess = (data) => {
    return {
        type: actionTypes.EDIT_USERS_SUCCESS,
        data: data
    };
}

export const editUsersFail = (err) => {
    return {
        type: actionTypes.EDIT_USERS_FAIL,
        error: err
    };
}

export const editContact = (data) => {
    return dispatch => {
        dispatch(editStart());
        axios.put('https://jsonplaceholder.typicode.com/users', data)
        .then( res => {
            const users = [];
            for ( let key in res.data ) {
                users.push( {
                    ...res.data[key]
                } );
            }
            dispatch(editUsersSuccess(users));
        } )
        .catch( err => {
            dispatch(editUsersFail(err));
        } );
    }
}
