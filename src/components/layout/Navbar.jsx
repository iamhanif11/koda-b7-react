import { useContext } from "react";
import { NavLink } from "react-router";
import LoginContext from "../../context/loginContext";

function Navbar() {
    const { user, logout, editProfile } = useContext(LoginContext)

    return (
        <nav className="p-4 font-semibold">
            <ul className="flex gap-20 justify-center items-center">
                
                <li>
                    {user ? (
                        <section className="flex items-center gap-2">
                            <p>{user.name}</p>
                            <img className="w-10 rounded-full" src={user?.photo || "https://i.pravatar.cc/150?img=62"} alt="" />
                            <select name="menu" id="menu" className="w-4">
                                <option value=""hidden></option>
                                <option value="Profile" onClick={editProfile}>
                                    Profile
                                </option>
                                    
                                    
                        <option onClick={logout} className="flex justify-center bg-blue-600 border p-1 rounded w-20">
                            Logout
                        </option>
                                
                        
                            </select>
                                </section>
                    ) : (
                        <NavLink className="border text-white bg-blue-600 p-2 rounded-md" to={"/login"}>
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;