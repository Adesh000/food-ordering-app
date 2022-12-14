import React from "react";
import logo from "../Images/lastminutedeals.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between mx-32 my-2">
            <img src={logo} alt="logo" />
            <div className="">
                <ul className="flex items-center justify-between w-96 font-bold">
                    <Link to="/"><li className="hover:text-orange-500">Home</li></Link>
                    <Link to="/deals"><li className="hover:text-orange-500">Deals</li></Link>
                    <Link to="/order"><li className="hover:text-orange-500">Order</li></Link>
                    <li className="hover:text-orange-500">Log in</li>
                    <button className="bg-orange-500 text-white px-5 py-1 rounded-2xl hover:bg-white hover:text-black border-orange-500 border">Sign Up</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
