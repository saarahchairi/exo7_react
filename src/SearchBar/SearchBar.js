import React from "react";
import "./searchBar.css"

class SearchBar extends React.Component {
    render(){
        return(
            <div class="search">
                <label htmlFor="research">Search:</label>
                <input type="text" name="search" id="" />
                <button class="go" type="submit">Go</button>
            </div>
        );
    }
}

export default SearchBar