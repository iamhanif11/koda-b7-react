import { Link, useLocation } from "react-router";

    const navigation = [
        {name: 'Homepage', path: '/'},
        {name: 'Minitask-1&2', path:'/App'},
        {name: 'Minitask-3', path:'/GeneratePoke'},
        {name: 'RickMorty', path: '/characters'}
    ];

    const Header = () => {
    const location = useLocation();

    return (
    <header className="bg-white  sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
    
        <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
          Minitask-4
        </Link>

        <nav className="flex gap-6">
          {navigation.map((link) => {
            return <Link
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
        })}
        </nav>

      </div>
    </header>
  );
};

export default Header;
