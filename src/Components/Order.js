import React from "react";
import Steps from "./Steps";
import step1 from "../Images/Picture6.png";
import stepImageTwo from "../Images/step2.png";
import stepImageThree from "../Images/Picture4.png";
import stepImageFour from "../Images/step4.png";

const Order = () => {
    return (
        <>
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

export default Order;
