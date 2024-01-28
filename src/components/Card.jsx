import Rating from "../components/Rating";

function Card({ url, header, points, body }) {
  return (
    <div className="card">
      <div className="card__title">
        <div className="card__title-left">
          <img src={url} alt={header} />
        </div>

        <div className="card__title-right">
          <h3 className="heading-tertiary">{header}</h3>
          <Rating value={points} />
          <span className="card__title-right--text">
            {header} rated {points} points to SolFa
          </span>
        </div>
      </div>

      <div className="card__body">
        <p className="paragraph">{body}</p>
      </div>
    </div>
  );
}

export default Card;
