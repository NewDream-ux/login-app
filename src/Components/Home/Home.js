import { useEffect, useState } from "react";
import Crousel from "../../GlobalComponent/Crousel/Crousel";
import HomeProductCard from "../../GlobalComponent/HomeProductCard/HomeProductCard";
import { getMethod } from "../../GlobalFunction/API";
import { PRODUCT_LIST_API } from "../../Constants";
import { useNavigate } from "react-router-dom";
import firstSlide from "../../Images/FirstSlide.jpg";
import secondSlide from "../../Images/SecondSlide.jpg";
import thirdSlide from "../../Images/ThirdSlide.jpg";

const Home=()=>{
    const [productDetails, setProductDetails] = useState([]);
    const navigate = useNavigate();
    const crouselImages = [
        { url: firstSlide, alt: "firstImg", label: "Label 1" },
        { url: secondSlide, alt: "secondImg", label: "Label 2" },
        { url: thirdSlide, alt: "thirdImg", label: "Label 3" }
    ];

    useEffect(()=>{
        getProductDetails();
    }, []);

    const getProductDetails=async()=>{
        const products = await getMethod(PRODUCT_LIST_API);
        setProductDetails(products.products);
    }

    const goToProductDetail=(productData)=>{
        navigate("/productDetials", { state: productData });
    }

    return(
        <>
          <Crousel 
         labels={true}
         autoPlay={true}
         showArrows={true}
         showThumbs={false}
         stopOnHover={true}
         crouselImages={crouselImages}
         />
         <HomeProductCard productDetails={productDetails} goToProductDetail={goToProductDetail}/>
        </>
    )
}

export default Home;