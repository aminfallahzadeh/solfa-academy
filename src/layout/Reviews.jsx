import Card from "../components/Card";
import { reviews } from "../../data/reviews.json";
import { forwardRef } from "react";

const Reviews = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="reviews" id="reviews">
      <h2 className="heading-secondary u-margin-auto">Most Recent Reviews</h2>
      <div className="reviews__content">
        {reviews.map((r) => (
          <Card
            url={r.img}
            header={r.header}
            points={r.points}
            body={r.body}
            key={r.id}
          />
        ))}
      </div>
    </div>
  );
});

Reviews.displayName = "Reviews";

// function Reviews() {
//   return (
//     <div className="reviews section" id="reviews">
//       <h2 className="heading-secondary u-margin-auto">Most Recent Reviews</h2>
//       <div className="reviews__content">
//         {reviews.map((r) => (
//           <Card
//             url={r.img}
//             header={r.header}
//             points={r.points}
//             body={r.body}
//             key={r.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default Reviews;
