import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router"; 
import LoginContext from "../../context/logincontext";


const navigation = [
    { name: 'Homepage', path: '/' },
    { name: 'Minitask-1&2', path: '/App' },
    { name: 'Minitask-3', path: '/GeneratePoke' },
    { name: 'RickMorty', path: '/characters' },
    { name: 'FetchTest', path: '/fetchtest' },
    { name: 'Survey', path: '/survey'}
];

const Header = () => {
    const location = useLocation();
  
    const { user, logout, editProfile } = useContext(LoginContext);

  
    const handleMenuChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "profile") {
            editProfile();
        } else if (selectedValue === "logout") {
            logout();
        }
  
        e.target.value = ""; 
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b">
      
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                
          
                <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
                    Minitask
                </Link>

              
                <nav className="flex gap-6">
                    {navigation.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors duration-200 ${
                                location.pathname === link.path
                                    ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5'
                                    : 'text-gray-600 hover:text-blue-500'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

              
                <div className="font-semibold flex items-center">
                    {user ? (
                      
                        <section className="flex items-center gap-3">
                            
                            <p className="text-sm text-blue-700">{user.name || user.username}</p>
                            
                            <img 
                                className="w-10 h-10 rounded-full object-cover border" 
                                src={user?.photo || user?.profile_photo || "https://i.pravatar.cc/150?img=46"} 
                                alt="Profile" 
                            />
                            
                          
                            <select 
                                onChange={handleMenuChange} 
                                className="w-6 cursor-pointer bg-transparent outline-none text-gray-500 hover:text-gray-800"
                                defaultValue=""
                            >
                                <option value="" disabled hidden>▼</option>
                                <option value="profile">Profile</option>
                                <option value="logout">Logout</option>
                            </select>
                        </section>
                    ) : (
                      
                        <NavLink 
                            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition-colors" 
                            to="/login"
                        >
                            Login
                        </NavLink>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Header;