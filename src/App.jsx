import { useRef } from "react";

import Navigation from "./components/Navigation";
import Header from "./layout/Header";
import About from "./layout/About";
import Courses from "./layout/Courses";
import Reviews from "./layout/Reviews";
import Footer from "./layout/Footer";

function App() {
  const observerRefs = {
    aboutRef: useRef(null),
    headerRef: useRef(null),
    coursesRef: useRef(null),
    reviewsRef: useRef(null),
    footerRef: useRef(null),
  };

  return (
    <div>
      <Navigation observerRefs={observerRefs} />
      <Header ref={observerRefs.headerRef} />
      <About ref={observerRefs.aboutRef} />
      <Courses ref={observerRefs.coursesRef} />
      <Reviews ref={observerRefs.reviewsRef} />
      <Footer ref={observerRefs.footerRef} />
    </div>
  );
}

export default App;
