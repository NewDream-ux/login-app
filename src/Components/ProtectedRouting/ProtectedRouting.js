import { useEffect } from "react";
import { getCookie } from "../../GlobalFunction/GlobalFunction";
import { USER_DETAILS_COOKIE } from "../../Constants";
import {useNavigate} from "react-router-dom";

const ProtectedRouting=({Component})=>{
    let login = getCookie(USER_DETAILS_COOKIE);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!login){
            navigate("/login");
        }
    }, [Component])
    return(
         <Component />
    )
}

export default ProtectedRouting;