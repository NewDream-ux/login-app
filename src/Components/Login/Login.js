import { useState } from "react";
import "./Login.css";
import { login } from "../../Api/post";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../GlobalFunction/GlobalFunction";
const Login = () => {
    const [data, setData] = useState({ username: "", password: "" });
    const [enterUsername, setEnterUsername] = useState(false);
    const [enterPassword, setEnterPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === "username") {
            setEnterUsername(false);
        } else if (name === "password") {
            setEnterPassword(false);
        }
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = data;
        let status = false;
        if (username === "") {
            setEnterUsername(true);
            status = true;
        }
        if (password === "") {
            setEnterPassword(true);
            status = true;
        }
        if (status) {
            return
        }
        const userDetails = await login(data);
        if (userDetails && userDetails.accessToken) {
            const cookieData = { key: "userdetails", details: userDetails };
            setCookie(cookieData);
            navigate("/userList");
        }
    }


    return (
        <div className="loginContainer">
            <div className="box">
                <div className="contents">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h2>Login</h2>
                        <span>Username</span>
                        <input type="text" placeholder="Enter username" name="username" onChange={(e) => handleChange(e)} />
                        {enterUsername && <label>Please enter username</label>}
                        <span>Password</span>
                        <input type="password" placeholder="Enter Password" name="password" onChange={(e) => handleChange(e)} />
                        {enterPassword && <label>Please enter password</label>}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;