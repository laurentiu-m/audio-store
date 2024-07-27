import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo-white.png";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQuantity, updateTotalQuantity } = useCart();

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTotalQuantity = async () => {
      try {
        const response = await axios.get(`${URL}/api/cart/total/quantity`, {
          withCredentials: true,
        });
        updateTotalQuantity(response.data.total);
      } catch (error) {
        console.error("Error fetching the total quantity: ", error);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    fetchTotalQuantity();
  }, [isOpen, URL, updateTotalQuantity]);

  return (
    <header className="bg-green text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <nav className="w-[80%] flex flex-wrap items-center mx-auto py-7 md:w-[90%]">
        <div className="flex flex-1 items-center justify-start gap-2">
          <Link
            to={"/"}
            className="flex items-center gap-2 cursor-pointer transition-all active:opacity-75  lg:hover:opacity-75"
          >
            <img src={logo} alt="logo" className="h-[2.5rem]" />
            <h1 className="font-bold text-xl">Audio.</h1>
          </Link>
        </div>

        <NavDesktop />

        <div className="flex flex-1 items-center justify-end md:gap-0">
          <Link to="/cart">
            <button className="relative">
              <FontAwesomeIcon
                icon={faBasketShopping}
                className="hidden text-2xl transition-all hover:opacity-75 md:block"
              />
              {totalQuantity > 0 && (
                <div className="hidden absolute bottom-[-11px] right-[-15px] bg-white text-green font-medium text-sm md:flex items-center justify-center w-[1.3rem] h-[1.3rem] rounded-full">
                  {totalQuantity}
                </div>
              )}
            </button>
          </Link>
          <button id="menu-toggle" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl md:hidden" />
          </button>
        </div>

        <NavMobile
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          totalQuantity={totalQuantity}
        />
      </nav>
    </header>
  );
}

export default Nav;
