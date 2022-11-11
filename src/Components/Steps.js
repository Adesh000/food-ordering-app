import React from "react";


const Steps = (props) => {
    return (
        <div className="border border-orange-300 p-10 rounded-xl">
            <img src={props.image} alt="" className="w-20"/>
            <h1 className="font-bold text-2xl my-5">STEP {props.heading}</h1>
            <p className="text-lg">{props.text}</p>
        </div>
    );
};

export default Steps;
