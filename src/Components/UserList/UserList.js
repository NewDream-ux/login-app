import { useEffect, useState } from "react";
import "./UserList.css";
import { getMethod } from "../../GlobalFunction/API";
import { USER_DETAILS_API } from "../../Constants";
import Search from "../Search/Search";
import { removeItems } from "../../GlobalFunction/GlobalFunction";
import Loader from "../../GlobalComponent/Loader/Loader";
const UserList = () => {
    const [userList, setUserList] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const collection = await getMethod(USER_DETAILS_API);
            isLoading ? setIsLoading(false) : setIsLoading(false);
            setUserList(collection.users);
            setUserDetails(collection.users)
        })();
    }, []);

    const searchedData = (key) => {
        if (key) {
            let filteredData = userList.filter((item) => {
                let name = `${item.firstName} ${item.lastName}`;
                return name.includes(key);
            });
            setUserList(filteredData);
        } else {
            setUserList(userDetails);
        }
    }

    const handleRemove = (currentItem, userWholeList) => {
        setUserList(removeItems(currentItem, userWholeList));
    }

    return (
        <>
        {isLoading && <Loader />}
            <Search searchedData={searchedData} />
            <div className="container">
                {userList.length > 0 ? userList.map((item) => {
                    const { firstName, lastName, age, email, phone, address: { address, city, state, postalCode }, birthDate, ip, gender } = item;
                    return (
                        <div className="card">
                            <div className="col">
                                <div className="content">
                                    <label className="label">Name : </label>
                                    <label className="value">{`${firstName} ${lastName}`}</label>
                                </div>
                                <div className="content">
                                    <label className="label">Age : </label>
                                    <label className="value">{age}</label>
                                </div>
                                <div className="content">
                                    <label className="label">Email : </label>
                                    <label className="value">{email}</label>
                                </div>
                                <div className="content">
                                    <label className="label">Phone : </label>
                                    <label className="value">{phone}</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="content">
                                    <label className="label">Address : </label>
                                    <label className="value">{`${address}, ${city}, ${state}, (${postalCode})`}</label>
                                </div>
                                <div className="content">
                                    <label className="label">Birth Date : </label>
                                    <label className="value">{birthDate}</label>
                                </div>
                                <div className="content">
                                    <label className="label">IP Address : </label>
                                    <label className="value">{ip}</label>
                                </div>
                                <div className="content">
                                    <label className="label">Gender : </label>
                                    <label className="value">{gender}</label>
                                </div>
                            </div>
                            <div className="btn-col">
                                <button onClick={() => handleRemove(item, userList)}>Remove</button>
                            </div>
                        </div>
                    )
                }) : <span className="emptyData">No data found</span>}
            </div>
        </>
    )
}

export default UserList;