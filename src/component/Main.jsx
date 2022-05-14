import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SearchBar from './SearchBar.jsx'
import { Router } from 'react-router-dom';

const Main = () => {
    const [state, setState] = useState('');

    return (
        <div className="main">
           

            <div className="main__header">
                <h1>SearchX</h1>
            </div>
            <div className="main__form">
                <SearchBar />
                <div className="main__group">
                    
                </div>

            </div>
           
        </div>
    )
}

export default Main