import React from "react";
import Cake from "./Cake";
import Loading from "./Loading";
import { useGlobalContext } from "../context.js";

const CakeList = () => {
  const { cakes, loading, searchTerm, setSearchTerm } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="main">
        <section className="section search">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name">Search Your Favourite Cake</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </section>
        <section className="section">
          <h2 className="section-title">Our Top Cakes</h2>
          <div className="cakes-center">
            {loading ? (
              <Loading />
            ) : (
              cakes
                .filter((value) => {
                  if (searchTerm === "") {
                    return value;
                  } else if (
                    value.cake_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  } else if (
                    value.type.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item) => <Cake key={item.id} {...item} />)
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default CakeList;
