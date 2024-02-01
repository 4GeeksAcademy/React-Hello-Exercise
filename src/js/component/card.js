import React from "react";
import CardImage from "/workspaces/React-Hello-Exercise/src/img/CardImage.png";

export function Card(){
    return(

                    <div className="card"> 
                        <img className="card-img-top" src= {CardImage} alt="Card image cap" /> 
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Cupidatat proident ut commodo consectetur sint. Cillum sunt qui magna labore nulla aute Lorem enim consequat eiusmod Lorem non dolore. Velit ad laboris nostrud eiusmod. Lorem esse est eu ipsum fugiat deserunt.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>)};
            