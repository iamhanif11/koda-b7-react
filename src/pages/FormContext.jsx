import { useContext,useState } from "react";
import LoginContext from "../context/logincontext";
import { useNavigate } from "react-router";
import HeaderV2 from "../components/layout/HeaderV2";

export function Login() {
    const navigate = useNavigate(); 
    const { login } = useContext(LoginContext);
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ name : username })
        navigate("/")
    }

    return (
        <>
        
        <HeaderV2/>
        <section>
            <section className="h-51">
                <form onSubmit={handleSubmit} className="justify-between focus-within: border-blue-600 border-2 rounded- flex px-2 w-90 py-2 mt-70 mx-auto" action="">
                    <label htmlFor="username" className="text-blue-600 font-medium  rounded-l-md p-1">Username :</label>
                    <input 
                    placeholder="enter your username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="focus:border focus:border-blue-600" 
                    type="text" />
                    <button className="rounded-r-md bg-blue-600 text-white p-1">Login</button>
                </form>
            </section>
        </section>
        </>
    )
}