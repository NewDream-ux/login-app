import React, { useEffect } from "react";
import "./HomeProductCard.css";
const HomeProductCard = ({ productDetails, goToProductDetail }) => {
    useEffect(()=>{
    }, []);
    return (
        <>
            <div className="product-heading">
                   <span>Product List</span>
            </div>
            <div className="product-container">
                {productDetails && productDetails.map((item) => {
                    const {thumbnail, title, price, id} = item;
                    return (
                        <div className="home-product-card" key={id} onClick={(i)=>goToProductDetail(item)}>
                            <div className="home-card-image">
                                <img src={thumbnail} alt="cosmetic" />
                            </div>
                            <div className="home-card-details">
                                <span className="home-product-name">{title}</span>
                                <span className="home-product-price">&#8377; {price}</span>
                                <span><input defaultChecked className="home-product-active" type="radio" /></span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default HomeProductCard;