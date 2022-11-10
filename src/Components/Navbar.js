import React from "react";
import logo from "../Images/lastminutedeals.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between mx-32 my-2">
            <img src={logo} alt="logo" />
            <div className="">
                <ul className="flex items-center justify-between w-96 font-bold">
                    <li className="hover:text-orange-500">Home</li>
                    <li className="hover:text-orange-500">Deals</li>
                    <li className="hover:text-orange-500">Order</li>
                    <li className="hover:text-orange-500">Log in</li>
                    <button className="bg-orange-500 text-white px-5 py-1 rounded-2xl hover:bg-white hover:text-black border-orange-500 border">Sign Up</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
