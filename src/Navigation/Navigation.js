import React from "react"
import "./navigation.css"
import SearchBar from "../SearchBar/SearchBar";

class Navigation extends React.Component{
    clickAction = (x) => {
        console.log(x);
    }
    render(){
        return(
            <nav>
                <div>
                <button onClick={() => this.clickAction("Acceuil")} class="link" type="submit">Link 1</button>
                <button onMouseOver={() => this.clickAction("Galerie")} class="link" type="submit">Link 2</button>
                <button onDoubleClick={() => this.clickAction("Contact")} class="link" type="submit">Link 3</button>
                </div>
                <div>
                    <SearchBar />
                </div>
            </nav>
        );
    }
}

export default Navigation