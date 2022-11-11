import React from "react";
import banner from "../Images/banner-bg.png";
import { Link } from "react-router-dom";
import Steps from "./Steps";
import step1 from "../Images/Picture6.png";
import stepImageTwo from "../Images/step2.png";
import stepImageThree from "../Images/Picture4.png";
import stepImageFour from "../Images/step4.png";

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
                    <Link to="/orders">
                        <button className="bg-orange-500 text-white px-7 py-2 rounded-3xl hover:bg-white hover:text-black border-orange-500 border font-bold my-5">
                            Find deals
                        </button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 m-20">
                <Steps
                    image={step1}
                    heading={1}
                    text="Create you account and get access to discounted deals"
                />
                <Steps
                    image={stepImageTwo}
                    heading={2}
                    text="Select your deal and place your order to reserve your bag at the restaurant"
                />
                <Steps
                    image={stepImageThree}
                    heading={3}
                    text="Collect the deal yourself or have any third party pick it for you by sharing your OTP with them. Just before handing the bag, the merchant will ask you to click a button to verify that you have collected the bag."
                />
                <Steps
                    image={stepImageFour}
                    heading={4}
                    text="Sit back and enjoy the delicious food that you have bought. Please make sure to rate the merchant and give feedback on the quality and taste of the food"
                />
            </div>
        </>
    );
};

export default Hero;
