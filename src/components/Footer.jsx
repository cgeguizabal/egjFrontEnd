import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareYoutube,
} from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import footer from "../styles/components/footer.module.scss";

import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

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
          <h4 className={footer.quick_links_title}>Quick Links</h4>
          <div className={footer.quick_links_container}>
            <ul className={footer.quick_links}>
              <li>Home</li>
              <li>Tour Expeditions</li>
              <li>Experience</li>
            </ul>
            <ul className={footer.quick_links}>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <hr className={footer.separator} />
        <div>
          <h4 className={footer.quick_links_title}>Follow Us</h4>
          <div className={footer.social_media_icons_container}>
            <div className={footer.social_media_icons}>
              <ul>
                <li>
                  <FaTripadvisor />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>

            <div className={footer.social_media_icons}>
              <ul>
                <li>
                  <FaSquareFacebook />
                </li>
                <li>
                  <FaSquareYoutube />
                </li>
              </ul>
            </div>
            <div className={footer.social_media_icons}>
              <ul>
                <li>
                  <FaSquareInstagram />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={footer.separator} />
        <div>
          <h4 className={footer.quick_links_title}>Contact Us</h4>
          <div className={footer.contact_us}>
            <ul>
              <li className={footer.contact_us_item}>
                <MdEmail /> expeditionsgeorgeofthejungle@gmail.com
              </li>
              <li className={footer.contact_us_item}>
                <IoLogoWhatsapp />+ 57 (317) 529-9539{" "}
              </li>
            </ul>
          </div>
          {/* 
          <ul>
              <li>Email: expeditionsgeorgeofthejungle@gmail.com </li>
              <li>Phone (Colombia): +57-320-899-6144 & + 57 (317) 529-9539 </li>
              <li>Phone (USA): +1 (680) 214-5633</li>
            </ul> */}
        </div>
      </div>
      <hr className={footer.separator_full} />
      <div className={footer.copyright_container}>
        <p className={footer.copyright_text}>
          ©2022 COPYRIGHT. EXPEDITIONS GEORGE OF THE JUNGLE ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

export default Footer;
