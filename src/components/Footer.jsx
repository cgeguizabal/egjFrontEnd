import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareYoutube,
} from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import footer from "../styles/components/footer.module.scss";

function Footer() {
  return (
    <footer className={footer.footer_container}>
      <div className={footer.footer_content_top}>
        {/* LOGO */}
        <div className={footer.logo_container}>
          <img className={footer.logo_image} src="Logo.png" alt="Logo" />
        </div>
        <hr className={footer.separator} />
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Tour Expeditions</li>
            <li>Experience</li>
            <li>About</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Follow Us</h4>
          <FaTripadvisor />

          <FaLinkedin />

          <FaSquareInstagram />
          <FaSquareFacebook />
          <FaSquareYoutube />
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li> Email: expeditionsgeorgeofthejungle@gmail.com </li>
            <li> Phone (Colombia): +57-320-899-6144 & + 57 (317) 529-9539 </li>
            <li> Phone (USA): +1 (680) 214-5633</li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <p>
          ©2022 COPYRIGHT. EXPEDITIONS GEORGE OF THE JUNGLE ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

export default Footer;
