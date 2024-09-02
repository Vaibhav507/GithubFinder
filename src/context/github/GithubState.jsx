import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
    }

    const [ state, dispatch ] = useReducer( GithubReducer, initialState )


    const searchUsers = async text => {
  
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    
    }

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }

    const getUser = async username => {
  
        const res = await axios.get(`https://api.github.com/search/users/${username}?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    
    }

    return <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser
    }} >

    {props.children}

    </GithubContext.Provider>
}

export default GithubState