import { icons } from "../../data/icons.js";

function Course({ iconName, header, body }) {
  const Icon = icons[iconName];

  return (
    <div className="course">
      <span className="course__icon">
        <Icon size="6rem" />
      </span>
      <a href="#">
        <h4 className="heading-quaternary">{header}</h4>
      </a>
      <p className="paragraph">{body}</p>
    </div>
  );
}

export default Course;
