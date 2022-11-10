import React from "react";
import filterIcon from "../Images/filterIcon.svg";

const Orders = () => {
    return (
        <>
            <div className="flex items-center justify-between mx-20">
                <h1 className="text-3xl font-bold">Our Deals</h1>
                <div className="flex items-center justify-between">
                    <input
                        type="search"
                        name=""
                        id=""
                        className="bg-red-100 rounded-3xl px-3 py-1 mr-3"
                        placeholder="Search by name"
                    />
                    <img src={filterIcon} alt="" />
                </div>
            </div>
            <div className="m-20">
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500">
                    All
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500">
                    {" "}
                    Break Fast
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500">
                    Lunch
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500">
                    Dinner
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500">
                    Desserts
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500">
                    Fastfood
                </button>
            </div>

            {/* Cards */}

            
        </>
    );
};

export default Orders;
