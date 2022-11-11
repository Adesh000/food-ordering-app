import React from "react";
import banner from "../Images/banner-bg.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="ml-20">
                <img src={banner} alt="banner" className="z-0" />
                <div className="z-10 absolute left-64 bottom-52">
                    <h3 className="text-orange-600 text-2xl font-semibold">
                        Trying to save money on food?
                    </h3>
                    <h1 className="text-5xl font-bold my-5">
                        Reserve Potential surplus food at a discount!
                    </h1>
                    <p className="text-2xl ">
                        Help prevent food wastage by buying an assorted deal bag
                        of choice
                    </p>
                    <Link to="/deals">
                        <button className="bg-orange-500 text-white px-7 py-2 rounded-3xl hover:bg-white hover:text-black border-orange-500 border font-bold my-5">
                            Find deals
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Hero;
