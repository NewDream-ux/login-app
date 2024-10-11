import Rating from "../Rating/Rating";
import "./Reviews.css";
import moment from "moment";

const Reviews = ({ reviews }) => {
    console.log("reviews", reviews)
    return (
        <>
            <h3>Reviews</h3>
            {reviews && reviews.map((item, index) => {
                const { reviewerName, reviewerEmail, rating, date, comment } = item;
                return (
                    <div className="review-container" key={index}>
                        <div className="review-content">
                            <div className="reviewName">{reviewerName}</div>
                            <div className="review-email">{reviewerEmail}</div>
                            <Rating rating={rating} />
                            <div className="review-comments">{comment}</div>
                            <div className="review-date">{moment(date).format('DD/MM/YYYY')}</div>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Reviews;