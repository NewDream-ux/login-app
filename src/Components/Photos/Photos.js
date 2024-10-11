import { useEffect, useState } from "react";
import { getMethod } from "../../GlobalFunction/API";
import { PHOTO_LIST_API, PHOTO_LIST_LABEL } from "../../Constants";
import VirtualizedData from "../../GlobalComponent/VirtualizedData/VirtualizedData";
import LargeImageModal from "../../GlobalComponent/LargeImageModal/LargeImageModal";
import Loader from "../../GlobalComponent/Loader/Loader";

const Photos = () => {
    const [photoList, setPhotoList] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [specificData, setSpecificData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const photos = await getMethod(PHOTO_LIST_API);
            if (photos) {
                setIsLoading(false);
            }
            setPhotoList(photos);
        })();
    }, []);

    const closeModal = () => {
        setIsModal(false);
    }

    const individualListData = (specificPhotoData) => {
        setIsModal(true);
        setSpecificData(specificPhotoData);
    }
    return (
        <>
            {isLoading && <Loader />}
            {isModal && <LargeImageModal individualData={specificData} closeModal={closeModal} />}
            <VirtualizedData listData={photoList} label={PHOTO_LIST_LABEL} individualListData={individualListData} />
        </>
    )
}

export default Photos;