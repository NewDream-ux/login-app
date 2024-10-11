import "./Modal.css";
const Modal = ({ closeModal, individualData }) => {

    return (
        <>
            <div className="modal">
                <div className="contentContainer">
                    <div className="modalHeading">
                        <div className="heading">More Information</div>
                        <div className="close" onClick={() => closeModal()}>&times;</div>
                    </div>
                    <hr className="horizontalLine" />
                    <div className="modalContent">
                        <div className="leftContent">
                            <span>Language : <label>{individualData.language}</label></span>
                            <span>Box Office : <label>{individualData.boxOffice}</label></span>
                            <span>Production : <label>{individualData.production}</label></span>
                        </div>
                        <div className="rightContent">
                            <span>Director : <label>{individualData.director}</label></span>
                            <span>Award : <label>{individualData.awards}</label></span>
                            <span>Country : <label>{individualData.country}</label></span>
                        </div>
                    </div>
                    <hr className="horizontalLine" />
                    <div className="modalFooter">
                        <button onClick={()=>closeModal()}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;