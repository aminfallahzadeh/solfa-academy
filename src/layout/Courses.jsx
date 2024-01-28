import Course from "../components/Course";
import { courses } from "../../data/courses.json";
import { forwardRef } from "react";

const Courses = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="courses" id="courses">
      <h2 className="heading-secondary u-margin-auto">Music Courses</h2>
      <div className="courses__content">
        {courses.map((c) => (
          <Course
            iconName={c.icon}
            header={c.header}
            body={c.body}
            key={c.id}
          />
        ))}
      </div>
    </div>
  );
});

Courses.displayName = "Courses";
// function Courses() {
//   return (
//     <div className="courses section" id="courses">
//       <h2 className="heading-secondary u-margin-auto">Music Courses</h2>
//       <div className="courses__content">
//         {courses.map((c) => (
//           <Course
//             iconName={c.icon}
//             header={c.header}
//             body={c.body}
//             key={c.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default Courses;
