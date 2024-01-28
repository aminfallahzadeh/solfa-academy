import Button from "../components/Button";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ marginTop: "8rem" }} id="about">
      <h2 className="heading-secondary u-margin-auto">About Us</h2>
      <div className="about">
        <div className="about__content">
          <div className="about__content-left">
            <img src="./studio.jpg" alt="studio" />
          </div>

          <div className="about__content-right">
            <h3 className="heading-tertiary">Welcome To SolFa Academy!</h3>
            <p className="paragraph u-margin-top-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              odit voluptates praesentium voluptate, harum at velit quas dolor
              quibusdam veniam iure placeat ducimus fuga mollitia repellendus.
            </p>
            <p className="paragraph u-margin-top-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              odit voluptates praesentium voluptate, harum at velit quas dolor
              quibusdam veniam iure placeat ducimus fuga mollitia repellendus.
            </p>
            <div className="u-margin-top-medium">
              <a href="#">
                <Button color="btn--black">Learn More</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";
// function About({ aboutRef }) {
//   return (
//     <div style={{ marginTop: "8rem" }} id="about" ref={aboutRef}>
//       <h2 className="heading-secondary u-margin-auto">About Us</h2>
//       <div className="about">
//         <div className="about__content">
//           <div className="about__content-left">
//             <img src="./studio.jpg" alt="studio" />
//           </div>

//           <div className="about__content-right">
//             <h3 className="heading-tertiary">Welcome To SolFa Academy!</h3>
//             <p className="paragraph u-margin-top-medium">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
//               odit voluptates praesentium voluptate, harum at velit quas dolor
//               quibusdam veniam iure placeat ducimus fuga mollitia repellendus.
//             </p>
//             <p className="paragraph u-margin-top-medium">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
//               odit voluptates praesentium voluptate, harum at velit quas dolor
//               quibusdam veniam iure placeat ducimus fuga mollitia repellendus.
//             </p>
//             <div className="u-margin-top-medium">
//               <a href="#">
//                 <Button color="btn--black">Learn More</Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default About;
