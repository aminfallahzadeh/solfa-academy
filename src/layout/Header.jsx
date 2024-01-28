import { useEffect, useState, useRef, forwardRef } from "react";
import Button from "../components/Button";

const Header = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Replace with the actual number of slides
  const autoSlideInterval = 5000; // 5 seconds in milliseconds
  const autoSlideTimer = useRef(null);

  // Function to change the slide on span click
  const changeSlide = (index) => {
    clearInterval(autoSlideTimer.current); // Clear the existing timer
    setCurrentSlide(index);

    // Set a new auto-slide timer
    autoSlideTimer.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, autoSlideInterval);
  };

  useEffect(() => {
    // Initial auto-slide setup
    autoSlideTimer.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, autoSlideInterval);

    return () => {
      clearInterval(autoSlideTimer); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <header className="header" id="home" ref={ref}>
      <div
        className={`header__slide1 slides ${
          currentSlide === 0 ? "activeSlide" : ""
        }`}
      >
        <div className="header__slide1--text-box">
          <h1 className="heading-primary u-margin-bottom-small">
            <span className="heading-primary--main fadeInAbove">
              solfa academy
            </span>
            <span className="heading-primary--sub u-margin-top-medium fadeInBottomLowDelay">
              new way of learning music
            </span>
          </h1>
          <div className="button-container u-margin-top-big fadeInBottom">
            <a href="#">
              <Button color="btn--white">Start Learning</Button>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`header__slide2 slides ${
          currentSlide === 1 ? "activeSlide" : ""
        }`}
      >
        <div className="header__slide2--text-box">
          <h1 className="heading-primary u-margin-bottom-small">
            <span className="heading-primary--sub fadeInAbove">
              Want to learn more about us?
            </span>
            <span className="heading-primary--main u-margin-top-medium fadeInBottomLowDelay">
              It&apos;s all about passion
            </span>
          </h1>
          <div className="button-container u-margin-top-big fadeInBottom">
            <a href="#">
              <Button color="btn--white">Discover More</Button>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`header__slide3 slides ${
          currentSlide === 2 ? "activeSlide" : ""
        }`}
      >
        <div className="header__slide3--text-box">
          <h1 className="heading-primary u-margin-bottom-small">
            <span className="heading-primary--main fadeInAbove">
              Some More Ad Here
            </span>
            <span className="heading-primary--sub u-margin-top-medium fadeInBottomLowDelay">
              Some covering text here
            </span>
          </h1>
          <div className="button-container u-margin-top-big fadeInBottom">
            <a href="#">
              <Button color="btn--white">Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="header__dots">
        <span
          className={`header__dots-dot ${
            currentSlide === 0 ? "activeDot" : ""
          }`}
          onClick={() => changeSlide(0)}
        ></span>
        <span
          className={`header__dots-dot ${
            currentSlide === 1 ? "activeDot" : ""
          }`}
          onClick={() => changeSlide(1)}
        ></span>
        <span
          className={`header__dots-dot ${
            currentSlide === 2 ? "activeDot" : ""
          }`}
          onClick={() => changeSlide(2)}
        ></span>
      </div>
    </header>
  );
});

Header.displayName = "Header";

// function Header({ headerRef }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 3; // Replace with the actual number of slides
//   const autoSlideInterval = 5000; // 5 seconds in milliseconds
//   const autoSlideTimer = useRef(null);

//   // Function to change the slide on span click
//   const changeSlide = (index) => {
//     clearInterval(autoSlideTimer.current); // Clear the existing timer
//     setCurrentSlide(index);

//     // Set a new auto-slide timer
//     autoSlideTimer.current = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//     }, autoSlideInterval);
//   };

//   useEffect(() => {
//     // Initial auto-slide setup
//     autoSlideTimer.current = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//     }, autoSlideInterval);

//     return () => {
//       clearInterval(autoSlideTimer); // Clean up the interval on component unmount
//     };
//   }, []);

//   return (
//     <header className="header" id="home" ref={headerRef}>
//       <div
//         className={`header__slide1 slides ${
//           currentSlide === 0 ? "activeSlide" : ""
//         }`}
//       >
//         <div className="header__slide1--text-box">
//           <h1 className="heading-primary u-margin-bottom-small">
//             <span className="heading-primary--main fadeInAbove">
//               solfa academy
//             </span>
//             <span className="heading-primary--sub u-margin-top-medium fadeInBottomLowDelay">
//               new way of learning music
//             </span>
//           </h1>
//           <div className="button-container u-margin-top-big fadeInBottom">
//             <a href="#">
//               <Button color="btn--white">Start Learning</Button>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`header__slide2 slides ${
//           currentSlide === 1 ? "activeSlide" : ""
//         }`}
//       >
//         <div className="header__slide2--text-box">
//           <h1 className="heading-primary u-margin-bottom-small">
//             <span className="heading-primary--sub fadeInAbove">
//               Want to learn more about us?
//             </span>
//             <span className="heading-primary--main u-margin-top-medium fadeInBottomLowDelay">
//               It&apos;s all about passion
//             </span>
//           </h1>
//           <div className="button-container u-margin-top-big fadeInBottom">
//             <a href="#">
//               <Button color="btn--white">Discover More</Button>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`header__slide3 slides ${
//           currentSlide === 2 ? "activeSlide" : ""
//         }`}
//       >
//         <div className="header__slide3--text-box">
//           <h1 className="heading-primary u-margin-bottom-small">
//             <span className="heading-primary--main fadeInAbove">
//               Some More Ad Here
//             </span>
//             <span className="heading-primary--sub u-margin-top-medium fadeInBottomLowDelay">
//               Some covering text here
//             </span>
//           </h1>
//           <div className="button-container u-margin-top-big fadeInBottom">
//             <a href="#">
//               <Button color="btn--white">Contact Us</Button>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="header__dots">
//         <span
//           className={`header__dots-dot ${
//             currentSlide === 0 ? "activeDot" : ""
//           }`}
//           onClick={() => changeSlide(0)}
//         ></span>
//         <span
//           className={`header__dots-dot ${
//             currentSlide === 1 ? "activeDot" : ""
//           }`}
//           onClick={() => changeSlide(1)}
//         ></span>
//         <span
//           className={`header__dots-dot ${
//             currentSlide === 2 ? "activeDot" : ""
//           }`}
//           onClick={() => changeSlide(2)}
//         ></span>
//       </div>
//     </header>
//   );
// }

export default Header;
