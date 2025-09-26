import { useClerk, useUser, UserButton, useSession } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import navBar from "../styles/components/navBar.module.scss";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tour Expeditions", path: "/tour" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { session } = useSession();

  console.log("Session:", session.getToken());
  console.log("User ID", user.id);
  session.getToken().then((token) => {
    console.log("JWT Token:", token);
  });

  const navigate = useNavigate();
  const location = useLocation();

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.screenY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const UserData = localStorage.getItem("auth-storage");
  // const UserRole = JSON.parse(UserData).state.user.role;
  // console.log("UserRole:", UserRole);

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
          {user && (
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
