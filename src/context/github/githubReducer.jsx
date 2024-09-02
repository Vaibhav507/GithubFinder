import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

} from '../types';

export default ( state, action ) => {

    switch (action.type) {

        case SEARCH_USERS:     
            return {
                ...state,
                users: action.payload
            }

            break;
        
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
            
            break;

        case GET_USER: 
            return {
                ...state,
                user: action.payload
            }
            
            break;
    
        default:
            break;
    }
}