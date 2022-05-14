import React from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider';
import {actionTypes} from '../context/reducer';

const SearchBar = ({ hideSearchBtn = false }) => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const[{}, dispatch] = useStateValue();

    const handleClickSearch = e => {
        e.preventDefault();
        
        console.log('you hit search button', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        // navigate('/search');
    }

    return (
        <form className="searchbar">
            <div className="searchbar__input">
                < SearchOutlined sx={{
                    color: '#babbbc',
                    marginLeft: '3px',
                }} />
                <input value={input} onChange={e => setInput(e.target.value)} />
            </div>

            {!hideSearchBtn ? (
                <div className="searchbar__button">
                    <button type='submit' onClick={handleClickSearch}>SearchX </button>
                </div>
            ) : (
                <div className="searchbar__button">
                    <button
                        className='searchbar__buttonHidden'
                        type='submit'
                        onClick={handleClickSearch}
                    >SearchX </button>
                </div>
            )}

        </form>
    )
}

export default SearchBar