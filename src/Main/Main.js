import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Article from "../Article/Article";
import Footer from "../Footer/Footer"


class Main extends React.Component{
    nombreArticles = 2;
    nbrArticles = (nbrArts) => {
        console.log(nbrArts);
    }
    render(){
        return(
            <section>
                <div>
                <Header />
                {
                    this.nombreArticles >= 2 && 
                        <div>
                            <Article compte={(x) => this.nbrArticles(x)} titre="Les tartines"/>
                            <Article compte={(x) => this.nbrArticles(x)} titre="Coding School"/>
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