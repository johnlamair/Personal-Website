import Link from "next/link";

// the NavLink component determines the formatting of each item within the Navbar component

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;