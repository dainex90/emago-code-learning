import {useState} from 'react';
import searchbutton from '../Images/search.png';

const SearchBar = (props) => {

    // props 'carries' the state from parent component here ->
    

    const searchFunctionality = (e) => {
        // is this right?
        props.setSearch(e.target.value);
        if (e.target.value == ""){
            addPlaceholderText();
            return;
        }
        const pattern = /Search.../i;
        clearPlaceholderText(e, pattern);
    }

    const clearPlaceholderText = (e, pattern) => {
        if (e.target.value == "Search.." || pattern.test(e.target.value))
        {
            props.callback("");
            document.getElementById("search-icon").style.display = "none";
        }
    }

    const addPlaceholderText = (e) => {
        props.callback("Search..")
        document.getElementById("search-icon").style.display = "inline";
        
    }
    return (
        <div id='search-container'>
            <img id='search-icon' style={{position: 'absolute', left: '10px', top: '10px'}} src={searchbutton} alt='search' width='15px' height='15px'></img>
            <input
                type="search"
                value={props.search}
                alt="search-field"
                id='search-field'
                onChange={e => searchFunctionality(e)}
                onClick={e => clearPlaceholderText(e)}
            ></input>
            <button id='search-button'>Search</button>
        </div>
    );
}

export default SearchBar;