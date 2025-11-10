import { Link } from "react-router-dom";

const NavLink = ({ href, linkName }) => {
  return (
    <div className="hover:underline text-cyan-400 font-semibold transition-all delay-200 duration-200 ease-in-out">
      <Link to={href}>{linkName}</Link>
    </div>
  );
};

export default NavLink;
