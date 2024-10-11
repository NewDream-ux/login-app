import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import UserList from "../Components/UserList/UserList";
import Header from "../GlobalComponent/Header";
import ProtectedRouting from "../Components/ProtectedRouting/ProtectedRouting";
import Movies from "../Components/Movies/Movies";
import Photos from "../Components/Photos/Photos";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<><Header /><Home /></>} />
                <Route path="/login" element={<><Header /><ProtectedRouting Component={Login} /></>} />
                <Route path="userList" element={<><Header /><ProtectedRouting Component={UserList} /></>} />
                <Route path="movies" element={<><Header /><ProtectedRouting Component={Movies} /></>}/>
                <Route path="photos" element={<><Header /><ProtectedRouting Component={Photos} /></>}/>
                <Route path="productDetials" element={<><Header /><ProductDetails /></>}/>
            </Routes>
        </>

    )
}

export default Routing;