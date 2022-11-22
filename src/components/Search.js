import React, {useEffect, useState} from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    console.log(results);

    // watch the term typed and only update the debounced term
    useEffect(() => {
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term);  
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }

    }, [term]);

    // we cannot pass an async function directly inside a useEffect as the arrow function
    // useEffect can return a function
    // watch for debouncedTerm updates and make a API request
    useEffect(() => {
        // Method 1 : call async like this (recommended)
        const searchWiki = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params : {
                    action : 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch : debouncedTerm
                }
            });
            setResults(data.query.search);
        };

        searchWiki();

        // Method 2 : Call immediately after func definition
        // (async () => {
        //     await axios.get('');
        // })();

        // Method 3 : use promises (least often used)
        // axios.get('')
        //     .then((res)=>{
        //         console.log(res.data)
        //     });
        
    }, [debouncedTerm]);

    const renderedResults = results.map((result)=> {
       return(
        <div className="item" key={result.pageid}>
            <div className="right floated content">
                <a
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>
       )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"   
                    ></input>
                </div>
                </div>
                <div className="ui celled list">
                    {renderedResults}
                 </div>
        </div>
    )
};
export default Search;