import { User } from "lucide-react";
import PropTypes from "prop-types";
import { Pages } from "../utils/Vistas";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
      <div className="flex items-center justify-center sm:gap-4 ">
        <User className="h-6 w-6 mr-2" />
        <h1 className="font-bold hidden sm:block">Edgar Meza</h1>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {Pages.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`${
              location.pathname === item.path
                ? "text-blue-600"
                : "text-gray-600"
            } hover:text-blue-600 transition-colors font-semibold`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};
Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  scrollTo: PropTypes.func,
};
export default Header;
