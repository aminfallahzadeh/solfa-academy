import { BiLogoFacebook } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMenu,
} from "react-icons/ai";
import { useEffect, useState } from "react";

function Navigation({ observerRefs }) {
  const observersArray = Object.values(observerRefs);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.onscroll = () => {
      observersArray.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.current.offsetTop;
        let height = sec.current.offsetHeight;

        if (top >= offset && top < offset + height) {
          setActiveSection(sec.current);
        }
      });
    };
  }, [observersArray]);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={"navigation " + (scroll ? "navbar-scroll" : "")}>
      <a href="#">
        <span className="phone-right">
          <CiMenuKebab size="22px" />
        </span>
      </a>
      <a href="#">
        <span className="phone-left">
          <AiOutlineMenu size="22px" />
        </span>
      </a>
      <a href="#">
        <img src="logo.png" alt="logo" />
      </a>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a
            href="#home"
            className={activeSection?.id === "home" ? "active" : null}
          >
            Home
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            href="#about"
            className={activeSection?.id === "about" ? "active" : null}
          >
            About
          </a>
        </li>
        <li className={"navigation__list-item"}>
          <a
            href="#courses"
            className={activeSection?.id === "courses" ? "active" : null}
          >
            Courses
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            href="#reviews"
            className={activeSection?.id === "reviews" ? "active" : null}
          >
            Reviews
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            href="#contacts"
            className={activeSection?.id === "contacts" ? "active" : null}
          >
            Contacts
          </a>
        </li>
      </ul>

      <ul className="navigation__socials">
        <li className="navigation__socials-item">
          <a href="#">
            <BiLogoFacebook size="23px" color="#eee" />
          </a>
        </li>
        <li className="navigation__socials-item">
          <a href="#">
            <AiOutlineInstagram size="23px" color="#eee" />
          </a>
        </li>
        <li className="navigation__socials-item">
          <a href="#">
            <AiOutlineTwitter size="23px" color="#eee" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
