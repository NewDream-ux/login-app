import "./Offline.css";
import offlineImage from "../../Images/OfflineImage.jpg";
const OfflineModal=()=>{
    return(
        <div className="offline-container">
           <img src={offlineImage} alt="offline"/>
        </div>
    )
}

export default OfflineModal;