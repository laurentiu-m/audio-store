import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo-white.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green text-white flex flex-col items-center gap-10 px-10 py-10 sm:gap-14 lg:gap-8">
      <div className="flex flex-col gap-10 w-[90%] lg:flex-row lg:justify-evenly xl:w-[60%]">
        <div className="flex items-center justify-center gap-2 cursor-default">
          <img
            src={logo}
            alt="logo-white"
            className="h-[2.5rem] sm:h-[2.8rem]"
          />
          <h1 className="text-xl font-bold sm:text-2xl">Audio.</h1>
        </div>

        <ul className="flex flex-col items-center gap-7 text-sm font-medium sm:text-base lg:flex-row">
          <li className="active:opacity-75 lg:hover:opacity-75">
            <Link to="/">Home</Link>
          </li>
          <li className="active:opacity-75 lg:hover:opacity-75">
            <Link to="/about">About</Link>
          </li>
          <li className="active:opacity-75 lg:hover:opacity-75">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="active:opacity-75 lg:hover:opacity-75">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-5">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl sm:text-3xl lg:text-2xl cursor-pointer lg:hover:opacity-75"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-2xl sm:text-3xl lg:text-2xl cursor-pointer lg:hover:opacity-75"
          />
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-2xl sm:text-3xl lg:text-2xl cursor-pointer lg:hover:opacity-75"
          />
        </div>
      </div>

      <p className="text-[12px] text-center sm:text-sm">
        Copyright © 2024 Audio. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
