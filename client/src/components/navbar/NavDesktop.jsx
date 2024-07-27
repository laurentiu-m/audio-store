import { Link } from "react-router-dom";

function NavDesktop() {
  return (
    <ul className="hidden md:flex items-center justify-center gap-5 text-lg font-medium lg:text-xl lg:gap-12">
      <li className="transition-all hover:opacity-75">
        <Link to="/">Home</Link>
      </li>
      <li className="transition-all hover:opacity-75">
        <Link to="/about">About</Link>
      </li>
      <li className="transition-all hover:opacity-75">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="transition-all hover:opacity-75">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavDesktop;
