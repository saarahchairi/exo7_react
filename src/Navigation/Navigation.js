import React from "react"
import "./navigation.css"
import SearchBar from "../SearchBar/SearchBar";

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <div>
                <button class="link" type="submit">Link 1</button>
                <button class="link" type="submit">Link 2</button>
                <button class="link" type="submit">Link 3</button>
                </div>
                <div>
                    <SearchBar />
                </div>
            </nav>
        );
    }
}

export default Navigation