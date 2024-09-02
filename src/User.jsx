import React, { useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import GithubContext from "./context/github/githubContext";


const User = ({  getUserRepos, repos, match }) => {

    const githubContext = useContext(GithubContext)

    const { user, getUser } = githubContext;

    useEffect(()=> {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    });

    
    const { name, avatar, url, location, bio, blog, login, html_url, followers, following, public_repos, pblic_gist, hireable } = user
        
        
    return(
        <div className="">
            {name}
        </div>
    );
}

export default User;