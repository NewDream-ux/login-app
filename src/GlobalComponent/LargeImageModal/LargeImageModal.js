import "./LargeImageModal.css";

const LargeImageModal=({individualData, closeModal})=>{
    const {url, title} = individualData;
    return(
        <div className="ImageModal">
            <div className="bigImageContainer">
                <div className="bigImageHeader">
                      <span className="bigImageHeadingText">{title}</span>
                      <span className="bigImageClose" onClick={()=>closeModal()}>&times;</span>
                </div>
                <hr />

                <div className="bigImage">
                    <img src={url} alt={title}/>
                </div>
            </div>
        </div>
    )
}

export default LargeImageModal;