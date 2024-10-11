import { useEffect, useState } from "react";
import Card from "../../GlobalComponent/Card/Card";
import { getMethod } from "../../GlobalFunction/API";
import { MOVIE_LIST_API } from "../../Constants";
import "./Movies.css";
import Modal from "../../GlobalComponent/Modal/Modal";
import Loader from "../../GlobalComponent/Loader/Loader";

const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [individualData, setIndividualData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                var movieData = await getMethod(MOVIE_LIST_API);
                setMovieList(movieData);
            } catch (err) {
            alert(err)
            }
            movieData ? setIsLoading(false) : setIsLoading(false)

        })();
    }, []);

    const handleModal = (movieData) => {
        setIndividualData(movieData);
        setIsModal(true);
    }

    const closeModal = () => {
        setIsModal(false);
    }
    return (
        <div className="container">
             {isLoading && <Loader />}
            {isModal && <Modal closeModal={closeModal} individualData={individualData} />}
            <label className="movie-title">Movies List</label>
            <Card cardData={movieList} handleModal={handleModal} />
        </div>
    )
}

export default Movies;