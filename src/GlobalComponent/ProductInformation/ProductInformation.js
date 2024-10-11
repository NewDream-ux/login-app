import "./ProductInformation.css";
const ProductInformation = (props) => {
    const {brand, category, warrantyInformation, weight} = props;
    return (
        <>
            <h3>Product Information</h3>
            <div className="product-information">
                <div className="info-label">Brand</div>
                <div className="info-value">{brand}</div>

                <div className="info-label">Category</div>
                <div className="info-value">{category}</div>

                <div className="info-label">Warranty Information</div>
                <div className="info-value">{warrantyInformation}</div>

                <div className="info-label">Weight</div>
                <div className="info-value">{weight}</div>
            </div>
        </>
    )
}

export default ProductInformation;