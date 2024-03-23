import { ICardData } from "./types";
import "./Card.css";
import star from "../../assets/Star.svg";
import starFill from "../../assets/Star_fill.svg";
const Card = ({
  id,
  image,
  name,
  popular,
  price,
  rating,
  votes,
  available,
}: ICardData) => {
  return (
    <li className={`product-${id}`}>
      {popular && <span className="product-badge">Popular</span>}
      <img src={image} alt={name} />
      <div className="product-description">
        <header className="product-header">
          <h4 className="product-title">{name}</h4>
          <span className="product-price">{price}</span>
        </header>
        <div className="product-info">
          {rating ? (
            <div>
              <img src={starFill} alt="Rating" />
              <p className="product-rating">{rating}</p>
              <span className="product-votes">({votes} votes)</span>
            </div>
          ) : (
            <div>
              <img src={star} alt="Rating" />
              <span className="product-votes">No ratings</span>
            </div>
          )}
          {!available && <p className="product-sold-out">Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default Card;
