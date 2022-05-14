import React from 'react'
import { useStateValue } from '../context/StateProvider';
import SearchBar from './SearchBar';

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();

    return (
        <div className="main">


            <div className="main__header">
                <h1>SearchX</h1>
            </div>
            <div className="main__form">
                <SearchBar />
                <div className="main__group">

                </div>
                <div className='searchPage'>
                    <div className='searchPage__header'>
                        <h1>{term}</h1>
                    </div>

                    <div className='searchPage__results'>

                    </div>

                </div>

            </div>

        </div>


    )
}

export default SearchPage