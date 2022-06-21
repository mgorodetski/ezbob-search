import { SearchOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchAction } from '../../actions/searchActions';


const SearchMain = ({ hideSearchBtn = false }) => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searching, setSearching] = useState(true);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);

    const handleClickSearch = e => {
        e.preventDefault();
        console.log('you hit search button', input);
        dispatch(searchAction(input));
        navigate('/search');
    }

    const getResults = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((actualData) => {
                setResults(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setResults(null);
            })
            .finally(() => {
                setSearching(false);
            });
    }

    useEffect(() => {
        getResults();
        // console.log(data);
    }, []);

    const indexedStr = str => {
        const obj = str.split(' ').join('');
        for (const [key, value] of Object.entries(obj)) {
            console.log(`${key}: ${value}`);
          }
    }

    const filteredResults = results.filter(item => {
        return item.body.toLowerCase().includes(input.toLowerCase());
    })

    const searchHint = (input, body) => {
        if (body.includes(input)) {
            return body.split(body.indexOf(input.toLowerCase()), body.indexOf(input.toLowerCase()) + 10);
        }
    }


    return (
        <div className="main">
            <div className="main__header">
                <h1>SearchX</h1>
            </div>
            <div className="main__form">
                <form className="searchbar">
                    <div className="searchbar__input">
                        < SearchOutlined sx={{
                            color: '#babbbc',
                            marginLeft: '3px',
                        }} />
                        <input value={input} onChange={e => setInput(e.target.value)} />
                        <ul className="autocomplete">
                            {
                                filteredResults.map(({ id, body }) => (
                                    <li className="autocomplete__item">
                                        {input}
                                    </li>
                                ))
                            }


                        </ul>
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
                <div className="main__group">
                </div>
                <div className='searchPage'>
                    <div className='searchPage__header'>

                        <h1>Search results</h1>
                    </div>
                    <div className="search__results">

                        {searching && <div>Searching...</div>}
                        {error && (
                            <div>{`There is a problem fetching data - ${error}`}</div>
                        )}
                        <ul>
                            {filteredResults &&
                                filteredResults.map(({ id, body }) => (
                                    <li key={id}>
                                        <h3>{body}</h3>
                                    </li>
                                ))}
                        </ul>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default SearchMain