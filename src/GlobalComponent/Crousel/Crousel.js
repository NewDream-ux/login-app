import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Crousel.css";

const Crousel = (props) => {
    const { labels, autoPlay, showArrows, showThumbs, stopOnHover, crouselImages } = props;
    return (
        <>
            <Carousel labels={labels} autoPlay={autoPlay} showArrows={showArrows} showThumbs={showThumbs} stopOnHover={stopOnHover}>
                {crouselImages && crouselImages.map((item) => {
                    const { url, alt, label } = item;
                    return (
                        <div>
                            <img src={url} alt={alt} />
                            {/* <p className="legend">{label}</p> */}
                        </div>
                    )
                })}
            </Carousel>
        </>
    )
}

export default Crousel;