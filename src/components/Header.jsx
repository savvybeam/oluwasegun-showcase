import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Header = () => {
  const links = [
    { href: "/", linkName: "Home" },
    { href: "/capabilities", linkName: "Capabilities" },
    { href: "/bio", linkName: "Bio" },
    { href: "/contact", linkName: "Contact" },
  ];

  return (
    <header className="flex justify-between border-2 border-fuchsia-100 h-20">
      <div className="py-7 px-3 flex justify-between">
        <Link to="/" className="px-2 hidden md:block transition-all">
          <code className="font-extrabold sm:font-semibold sm:text-3xl text-cyan-400">
            coded@
          </code>
        </Link>
        <Link to="/" className="">
          <span className="font-bold sm:font-light sm:text-3xl text-fuchsia-400">
            Oluwasegun Salami
          </span>
        </Link>
      </div>
      <nav className="flex justify-between items-center w-1/3">
        {links.map((link, index) => (
          <NavLink key={index} href={link.href} linkName={link.linkName} />
        ))}
      </nav>
      <div id="blog" className="py-7 px-5">
        <a
          className="font-bold text-fuchsia-500 transition-all hover:text-fuchsia-300 hover:underline"
          href="/blog"
        >
          blog
        </a>
      </div>
    </header>
  );
};

export default Header;
