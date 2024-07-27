import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo-white.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavMobile({ isOpen, setIsOpen, totalQuantity }) {
  return (
    <div
      className={`md:hidden transition-navbar fixed top-0 bottom-0 left-0 right-0 bg-green ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="h-[90%] flex flex-col justify-between">
        <div className="w-[80%] flex items-center justify-between mx-auto py-7">
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            <button className="relative">
              <FontAwesomeIcon icon={faBasketShopping} className="text-2xl" />
              <div className="absolute bottom-[-10px] right-[-15px] bg-white text-green font-medium text-sm flex items-center justify-center w-[1.4rem] h-[1.4rem] rounded-full">
                {totalQuantity}
              </div>
            </button>
          </Link>

          <div className="flex flex-1 items-center justify-center gap-2">
            <img src={logo} alt="logo-black" className="h-[2.5rem]" />
            <h1 className="font-bold text-xl">Audio.</h1>
          </div>

          <button onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center gap-7 text-lg font-medium sm:text-xl">
          <li className="active:opacity-75">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="active:opacity-75">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="active:opacity-75">
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li className="active:opacity-75">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-8">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
          <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

NavMobile.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  totalQuantity: PropTypes.number,
};

export default NavMobile;
