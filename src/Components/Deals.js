import React, { useState } from "react";
import filterIcon from "../Images/filterIcon.svg";
import Cards from "./Cards";
import Menu from "./Menu";

const Deals = () => {

    const [items, setItems] = useState(Menu)

    const filterMenu = (value) => {
        const updateItems = Menu.filter((elem) => {
            return elem.category === value;
        })
        setItems(updateItems);
    }

    return (
        <>
            <div className="flex items-center justify-between mx-32 my-16">
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
            <div className="mx-28 my-12">
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500">
                    All
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500" onClick={() => filterMenu('Break Fast')} >
                    Break Fast
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500" onClick={() => filterMenu('Lunch')}>
                    Lunch
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500" onClick={() => filterMenu('Dinner')}>
                    Dinner
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500" onClick={() => filterMenu('Desserts')}>
                    Desserts
                </button>
                <button className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500" onClick={() => filterMenu('Fastfood')}>
                    Fastfood
                </button>
            </div>

            {/* Cards */}
            <h1 className="text-3xl font-bold ml-32">Discover the best food & drinks in :-</h1>
            <div className="grid grid-cols-4 gap-5 m-32">
                {
                    items.map(element => <Cards mealData={element}/>)
                }
            </div>
        </>
    );
};

export default Deals;
