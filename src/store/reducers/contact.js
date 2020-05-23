import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contact: null,
    error: false,
    editing: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONTACT_ADD_SUCCESS :
            return state.contact([action.data]);
        case actionTypes.CONTACT_ADD_ERROR: 
            return state.contact([action.data]);
        case actionTypes.FETCH_USERS_SUCCESS:
            return state.contact([action.data]);
        case actionTypes.FETCH_USERS_FAIL: 
            return state.contact([action.data]);
        case actionTypes.REMOVE_USERS_SUCCESS:
            return state.contact([action.data]);
        case actionTypes.REMOVE_USERS_FAIL:
            return state.contact([action.data]);
        case actionTypes.EDIT_START:
            var user = state.contact.map((item) => item.id === action.id ? {...item} : item)
            return {
                contact: user,
                editing: true
            }
        case actionTypes.EDIT_USERS_SUCCESS:
            return {
                ...state,
                contact : action.data,
                editing: false
            }
        case actionTypes.EDIT_USERS_FAIL:
            return {
                ...state,
                contact : action.data,
                editing: false
            };
        default: return state;
    }
};

export default reducer;
