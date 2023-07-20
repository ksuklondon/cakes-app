import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://my-cakes-api-6f3471125acd.herokuapp.com/cakes";

const SingleCake = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [singlecake, setSinglecake] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCake() {
      try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        if (data) {
          const {
            image,
            cake_name,
            category,
            type,
            ingredients,
            instructions,
          } = { ...data };
          const newCake = {
            image,
            cake_name,
            category,
            type,
            ingredients,
            instructions,
          };
          setSinglecake(newCake);
        } else {
          setSinglecake(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCake();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!singlecake) {
    return <h2 className="section-title">No Cake To Display</h2>;
  }

  const { image, cake_name, category, type, ingredients, instructions } =
    singlecake;

  return (
    <section className="onecake-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{cake_name}</h2>
      <div className="onecake">
        <img src={image} alt={cake_name} className="onecake-img" />
        <div className="onecake-info">
          <p>
            <span className="onecake-data">Name : </span>
            {cake_name}
          </p>
          <p>
            <span className="onecake-data">Category : </span>
            {category}
          </p>
          <p>
            <span className="onecake-data">Type : </span>
            {type}
          </p>
          <p>
            <span className="onecake-data">Ingredients : </span>
            {ingredients.join(", ")}
          </p>
          <p>
            <span className="onecake-data">Instructions : </span>
            {instructions.toString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCake;
