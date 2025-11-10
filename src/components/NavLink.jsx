import { Link } from "react-router-dom";

const NavLink = ({ href, linkName }) => {
  return (
    <div className="hover:underline text-cyan-400">
      <Link to={href}>{linkName}</Link>
    </div>
  );
};

export default NavLink;
