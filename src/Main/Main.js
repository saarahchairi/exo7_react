import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Article from "../Article/Article";
import Footer from "../Footer/Footer"


class Main extends React.Component{
    nombreArticles = 2;
    render(){
        return(
            <section>
                <div>
                <Header />
                {
                    this.nombreArticles >= 2 && 
                        <div>
                            <Article />
                        </div>
                }
                {
                    this.nombreArticles < 2 && 
                    <div>
                        <h1>Il n'y a pas d'article</h1>
                    </div>
                }
                <Footer />
                </div>
            </section>
        );
    }
}

export default Main