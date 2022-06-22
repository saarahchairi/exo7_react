import React, { Component } from "react";
import Header from "./Header/Header";
import Article from "./Article/Article";
import Footer from "./Footer/Footer";
import "./app.css"

class App extends Component{
  render(){
    return(
      <body>
        <Header />
        <Article />
        <Footer />
      </body>
    );
  }
}

export default App;
