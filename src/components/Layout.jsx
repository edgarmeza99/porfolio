import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
