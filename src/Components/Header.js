import React, { useState } from "react";
import { BiLogInCircle, BiMenu, BiShoppingBag } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiPizza } from "react-icons/pi";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Hot Items", path: "/items" },
  { name: "Menus", path: "/menus" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  
  const cartItems = useSelector((state) => state.cart?.cartItems);
  const { pathname } = useLocation();

  const cartItemCount = cartItems?.length || 0;

  return (
    <nav className="bg-white shadow-md w-full px-8 md:px-auto sticky">
      <div className="md:h-16  h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="text-indigo-500 md:order-1 text-4xl flex gap-2">
          {/* Heroicon - Chip Outline */}
          
          <Link to={'/'}>
            <PiPizza className="animate-spin" />
          </Link>
        </div>
        <div className={`text-gray-500 order-3 w-full md:w-auto md:order-2 ` }>
          <ul className="flex font-semibold justify-between">
            {/* Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 */}
            {navigationLinks.map((link) => (
              <li key={link.name} className="md:px-4 md:py-2">
                <Link to={link.path} className={`block ${pathname === link.path ? "text-indigo-500" : "hover:text-indigo-400"}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2 md:order-3 flex gap-2">
          <Link to={'/cart'} aria-label="Cart">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center">
              {/* Heroicons - Shopping Bag */}
              <BiShoppingBag />
              {cartItemCount > 0 && (
                <sup className="bg-white text-black p-2 rounded-full">{cartItemCount}</sup>
              )}
            </button>
          </Link>

          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2" aria-label="Login">
            {/* Heroicons - Login Solid */}
            <BiLogInCircle />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
