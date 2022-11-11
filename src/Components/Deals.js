import React, { useState } from "react";
import filterIcon from "../Images/filterIcon.svg";
import Cards from "./Cards";
import Menu from "./Menu";

const allCategories = [...new Set(Menu.map((element) => element.category)), "All"];

const Deals = () => {
    const [items, setItems] = useState(Menu);
    const [categoryItems, setCategoryItems] = useState(allCategories);

    const filterMenu = (value) => {
        if(value === 'All') {
            setItems(Menu);
            return;
        }

        const updateItems = Menu.filter((elem) => {
            return elem.category === value;
        });
        setItems(updateItems);
    };

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
                {categoryItems.map((element, index) => {
                    return (
                        <button
                            className="bg-red-100 rounded-3xl px-5 py-1 mx-3 hover:text-orange-500"
                            key={index}
                            onClick={() => filterMenu(element)}
                        >
                            {element}
                        </button>
                    );
                })}
            </div>

            {/* Cards */}
            <h1 className="text-3xl font-bold ml-32">
                Discover the best food & drinks in :-
            </h1>
            <div className="grid grid-cols-4 gap-5 m-32">
                {items.map((element) => (
                    <Cards mealData={element} />
                ))}
            </div>
        </>
    );
};

export default Deals;
