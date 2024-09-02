import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import GithubContext from './context/github/githubContext';

const Search = ({ setAlert }) => {

    const githubContext = useContext(GithubContext);
    
    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if(text === "") {
            setAlert("Please enter something", "light");
        } else {
            githubContext.searchUsers(text);
        setText('');
        }  
    }

    return(
        <div className='d-flex gap-2 flex-column'>
            <form onSubmit={onSubmit} className="form d-flex flex-column gap-2">
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
                <input type="submit" value="Search" className='btn btn-dark'/>
            </form>
            {githubContext.users.length > 0 &&  <button className='btn btn-primary w-100' onClick={githubContext.clearUsers}>Clear</button>}
        </div>
    );
    
}

Search.propTypes = {
    setAlert : PropTypes.func.isRequired
}

export default Search