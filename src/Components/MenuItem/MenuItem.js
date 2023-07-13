import React from "react";
import './MenuItem.css';
export const MenuItem = ({ item }) => {
 console.log(item, 'in menu')

 const formattedPrice = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
    return (
        <div className="menu-item">
            <span className="menu-top"><h3>{item.name}</h3><p>{USDollar.format(item.price)}</p></span>
            <div className="menu-bottom">
                <p>{item.description}</p>
            </div>
        </div>
    )
}