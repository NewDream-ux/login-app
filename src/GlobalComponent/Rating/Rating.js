import "./Rating.css";
const Rating=({rating})=>{
    return(
        <div className="rating-container">
         <label className="star-value">{rating}</label> &nbsp;
         {[1, 2, 3, 4, 5].map((item)=>{
            return(
                <label className={`starts ${item <= Math.round(rating) ? `on` : `off`}`} key={item}>&#9733;</label>
            )
         })}
        </div>
    )
}

export default Rating;