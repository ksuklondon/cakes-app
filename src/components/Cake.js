import React from "react";
import { Link } from "react-router-dom";

const Cake = ({
  id,
  image,
  cake_name,
  category,
  type,
  ingredients,
  instructions,
}) => {
  return (
    <article className="cake">
      <div className="cake-img">
        <img src={image} alt={cake_name} />
      </div>
      <div className="cake-footer">
        <h3>{cake_name}</h3>
        <h4>{category}</h4>
        <p>{type}</p>
        <Link to={`/cake/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cake;
