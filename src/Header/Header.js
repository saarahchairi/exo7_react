import React from "react"
import "./header.css"
import Navigation from "../Navigation/Navigation"

class Header extends React.Component{
    render(){
        return(
            <header>
                <Navigation />
            </header>
        );
    }
}

export default Header