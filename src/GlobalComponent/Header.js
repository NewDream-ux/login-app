import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { deleteCookie, getCookie } from "../GlobalFunction/GlobalFunction";
import { USER_DETAILS_COOKIE } from "../Constants";

const Header = () => {
    const userDetails = getCookie(USER_DETAILS_COOKIE);


    return (
        <div className="navbar" id="navbar">
            <div className="contentArea">
                <div className="leftContentHeading">
                    <div className="imageContainer">
                        <img src="https://picsum.photos/id/1/200/300" alt="logo" />
                    </div>
                    <h3><Link to="/">Login Project</Link></h3>
                </div>
                <nav>
                    <ul>
                        {userDetails && <>
                            <li className="menu"><NavLink to="/userList">User List</NavLink></li>
                            <li className="menu"><NavLink to="/movies">Movie List</NavLink></li>
                            <li className="menu"><NavLink to="/photos">Photo List</NavLink></li>
                        </>}
                        <li className="menu">{userDetails ? <NavLink to="/" onClick={() => deleteCookie(USER_DETAILS_COOKIE)}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}</li>
                    </ul>
                </nav>
                <div className="editImage">A</div>
            </div>
        </div>
    )
}

export default Header;