import "./Card.css";
const Card = ({ cardData, handleModal }) => {
    return (
        <div className="cardContainer">
            <div className="cardGrid">
                {cardData && cardData.map((item) => {
                    return (
                            <div className="movie-card">
                                <img src={item.poster} alt="dummyImage" />
                                <label>Title : {item.title}</label>
                                <button onClick={(e)=>handleModal(item)}>More</button>
                            </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Card;