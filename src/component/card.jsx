import React from "react";
import "./card.scss"

const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img
          src="src\assets\php-java-js.jpg"
          alt="image de php java js"
          width={529}
          height={300}
        />
      </div>
      <div className="title">
        <h2>Title</h2>
        <div className="star">
          <img src="src\assets\star.png" alt="star"  className="etoile"/>
          <img src="src\assets\star.png" alt="star"  className="etoile" />
          <img src="src\assets\star.png" alt="star"  className="etoile"/>
          <img src="src\assets\star.png" alt="star"  className="etoile"/>
          <p className="note">4</p> <p className="nombre">(4500)</p>
        </div>
        <h4>secondary text</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Aliquid, architecto?
        </p>
      </div>
      <div className="subtitle">
        <h2>subtitle</h2>
        <div className="button">
          <button>item 1</button>
          <button>item 2</button>
          <button>item 3</button>
          <button>item 4</button>
        </div>
        <div className="action">
          <a href="">ACTION 1</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
