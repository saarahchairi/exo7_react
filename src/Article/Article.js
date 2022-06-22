import React from "react";
import Img from "../img/tartine.png"
import "./article.css"

class Article extends React.Component{
    render(){
        return(
            <main>
                <div class="article">
                    <div className="photo">
                        <img src={Img} alt="" />
                    </div>
                    <div className="texte">
                        <p className="titre">Quel est le titre</p>
                        <h2>Mon premier article</h2>
                        <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores minima sapiente molestiae unde quidem delectus laborum in quas vitae, totam id eaque. Voluptatem ullam nobis deserunt error facilis consequuntur, a molestiae ad in qui obcaecati laboriosam voluptates, eos non molestias cumque aut recusandae quaerat accusamus quibusdam nisi rerum suscipit?</p>
                    </div>
                </div>
                <div class="article">
                    <div className="photo">
                        <img src={Img} alt="" />
                    </div>
                    <div className="texte">
                        <p className="titre">Quel est le titre</p>
                        <h2>Mon premier article</h2>
                        <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores minima sapiente molestiae unde quidem delectus laborum in quas vitae, totam id eaque. Voluptatem ullam nobis deserunt error facilis consequuntur, a molestiae ad in qui obcaecati laboriosam voluptates, eos non molestias cumque aut recusandae quaerat accusamus quibusdam nisi rerum suscipit?</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Article