import React, { useEffect, useState } from 'react'

const SearchResults = ({ input }) => {

    //prepare data
    const [data, setData] = useState(null);
    const [searching, setSearching] = useState(true);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);

    const getResults = () => {

    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setSearching(false);
            });
        // console.log(data);
    }, []);

    // const filteredData = data.filter(item => {
    //     return item.body.toLowerCase().includes(input.toLowerCase());
    // })

    return (

        


        <div className="search__results">

            {searching && <div>Searching...</div>}
            {error && (
                <div>{`There is a problem fetching data - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.map(({ id, body }) => (
                        <li key={id}>
                            <h3>{body}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default SearchResults