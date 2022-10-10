import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <nav className="sticky top-0 bg-white shadow-md z-50">
            <div className="conainer mx-auto flex flex-wrap flex-col md:flex-row items-center">
               <Link to="/" className="Navbar-logo">
                    <h1>Sappi</h1>
               </Link>
            </div>
        </nav>
    );
};

export default Navbar;