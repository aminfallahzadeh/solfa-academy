import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { PiAddressBook } from "react-icons/pi";
import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="footer" id="contacts">
      <div className="footer__logoContainer">
        <img src="logo.png" />
      </div>

      <div className="footer__textContainer">
        <div className="footer__textContainer">
          <p className="paragraph footer__textContainer-text">
            &copy; 2023 all right reserved SolFa Academy <br />
            <br />
            This website is fully designed and developed by Amin Fallahzadeh
          </p>

          <ul className="footer__textContainer-list">
            <li>
              <a href="#">
                <span>
                  <HiOutlineMail size="23px" />
                </span>
              </a>
              <p className="paragraph">&nbsp;: solfa@email.com</p>
            </li>
            <li>
              <a href="#">
                <span>
                  <FiPhone size="23px" />
                </span>
              </a>
              <p className="paragraph">&nbsp;: +88 888 88 88</p>
            </li>
            <li>
              <a href="#">
                <span>
                  <PiAddressBook size="23px" />
                </span>
              </a>
              <p className="paragraph">
                &nbsp;: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <a href="#">
                <span>
                  <HiOutlineMail size="23px" />
                </span>
              </a>
              <p className="paragraph">&nbsp;: solfa@email.com</p>
            </li>
            <li>
              <a href="#">
                <span>
                  <FiPhone size="23px" />
                </span>
              </a>
              <p className="paragraph">&nbsp;: +88 888 88 88</p>
            </li>
            <li>
              <a href="#">
                <span>
                  <PiAddressBook size="23px" />
                </span>
              </a>
              <p className="paragraph">
                &nbsp;: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
