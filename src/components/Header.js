import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import yumbite from "../assets/yumbite-logo.gif";
import online from "../assets/online.svg";
import cart from "../assets/cart.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between px-48 items-center h-16 z-50 w-full text-white sticky top-0 transition-all duration-500 ease-in-out ${
        scrolled
          ? "backdrop-blur-xl shadow-2xl shadow-zinc-700"
          : "bg-transparent"
      }`}
    >
      <div>
        <Link to="/">
          <img className="mt-2 h-16 object-cover" src={yumbite} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-center items-center gap-1">
          <Link to="/">
            <li className="flex justify-center items-center font-normal w-20 hover:border hover:rounded-full hover:p-1">
              <span>Home</span>
            </li>
          </Link>
          <Link to="/services">
            <li className="flex justify-center items-center font-normal w-20 hover:border hover:rounded-full hover:p-1">
              <span>Services</span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex justify-center items-center font-normal w-20 hover:border hover:rounded-full hover:p-1">
              <span>Contact</span>
            </li>
          </Link>
          <Link to="/cart">
            <div className="flex relative ml-2">
              <img src={cart} className="w-7 h-7" />
              <span className="absolute left-[14px] bottom-[14px] bg-green-500 text-white rounded-full py-1 px-2 text-xs">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </ul>
        <div className="absolute right-5">
          {onlineStatus ? (
            <div className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <img src={online} />
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ff0000"
            >
              <path d="M790-56 414-434q-47 11-87.5 33T254-346l-84-86q32-32 69-56t79-42l-90-90q-41 21-76.5 46.5T84-516L0-602q32-32 66.5-57.5T140-708l-84-84 56-56 736 736-58 56Zm-310-64q-42 0-71-29.5T380-220q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T480-120Zm236-238-29-29-29-29-144-144q81 8 151.5 41T790-432l-74 74Zm160-158q-77-77-178.5-120.5T480-680q-21 0-40.5 1.5T400-674L298-776q44-12 89.5-18t92.5-6q142 0 265 53t215 145l-84 86Z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
