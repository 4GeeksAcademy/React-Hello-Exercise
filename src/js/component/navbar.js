import React from "react";
function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark p-2 px-5">
            <a className="navbar-brand text-white" href="#">Start Boostrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active text-white" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-white-50">About</a>
                    <a className="nav-link text-white-50">Services</a>
                    <a className="nav-link text-white-50">Contact</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;