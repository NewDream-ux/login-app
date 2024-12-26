import { useLocation } from "react-router-dom";
import "./ProductDetails.css";
import Crousel from "../../GlobalComponent/Crousel/Crousel";
import { useEffect, useState } from "react";
import { VISIT_STORE } from "../../Constants";
import Rating from "../../GlobalComponent/Rating/Rating";
import { mrpPrice } from "../../GlobalFunction/GlobalFunction";
import Reviews from "../../GlobalComponent/Reviews/Reviews";
import ProductInformation from "../../GlobalComponent/ProductInformation/ProductInformation";

const ProductDetails = () => {
    const location = useLocation();
    const { title, images, rating, discountPercentage, price, availabilityStatus, returnPolicy, reviews, brand, category, warrantyInformation, weight } = location.state;
    const [crouselImages, setCrouselImages] = useState([]);
    console.log("location", location);

    useEffect(() => {
        let crData = [];
        images.forEach((element, index) => {
            crData.push({ url: element, alt: `${index + 1}st` });
        });
        setCrouselImages(crData);
    }, [images]);
    return (
        <>
            <div className="image-review">
                <Crousel
                    labels={true}
                    autoPlay={true}
                    showArrows={true}
                    showThumbs={true}
                    stopOnHover={true}
                    crouselImages={crouselImages}
                />
                <div className="product-complete-detail">
                    <h3 className="product-title">{title}</h3>
                    <a href={VISIT_STORE} target="_blank" rel="noreferrer">{`Visit to ${title} store`}</a>
                    <Rating rating={rating} />
                    {discountPercentage && <div className="percentage">&#8722;{discountPercentage}&#37;    </div>}
                    &#8377;
                    <div className="price">{price}</div>
                    {discountPercentage && <div className="mrp">M.R.P.:<del>&#8377;{mrpPrice(discountPercentage, price)}</del></div>}
                    <div className="availabilityStatus">{availabilityStatus}</div>
                    <div className="returnPolicy">{returnPolicy}</div>
                    <button className="productDetailButton">Buy Now</button> &nbsp;
                    <button className="productDetailButton">Add to Cart</button>
                    <hr />
                    <ProductInformation
                        brand={brand}
                        category={category}
                        warrantyInformation={warrantyInformation}
                        weight={weight}
                    />
                    <Reviews
                        reviews={reviews}
                    />
                </div>
            </div>

        </>
    )
}
export default ProductDetails;