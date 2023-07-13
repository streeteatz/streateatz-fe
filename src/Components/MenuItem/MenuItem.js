import React from "react";

export const MenuItem = ({ item }) => {
 console.log(item, 'in menu')
    return (
        <div>
            <span><h3>{item.name}</h3><p>{item.price}</p></span>
            <p>{item.description}</p>
        </div>
    )
}