import { useClerk, useUser, UserButton, useSession } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import navBar from "../styles/components/navBar.module.scss";
import useAuthStore from "../store/auth";

const Navbar = () => {
  const currentUser = useAuthStore((state) => state.currentUser);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tour Expeditions", path: "/tour" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];

  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate();
  const location = useLocation();

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.screenY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className={navBar.navbar_container}>
      <nav className={navBar.navbar}>
        {/** Logo*/}
        <Link to="/" className={navBar.logo}>
          <img src="Logo.png" alt="Logo" className={navBar.logo_Image} />
        </Link>

        {/* Desktop Nav */}
        <div className={navBar.nav_links}>
          {navLinks.map((link, i) => (
            <a className={navBar.nav_link} key={i} href={link.path}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right, Clerk User button */}
        <div className={navBar.nav_right}>
          {currentUser?.role === "Admin" && (
            <button className={navBar.button_dashboard}>Dashboard</button>
          )}
          <button className={navBar.button_book}>Book Now</button>
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<FaBook />}
                  onClick={() => navigate("/my-bookings")}
                ></UserButton.Action>
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button className={navBar.button_login} onClick={openSignIn}>
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
