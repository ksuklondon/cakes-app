import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://my-cakes-api-6f3471125acd.herokuapp.com/cakes";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cakes, setCakes] = useState([]);

  const fetchCakes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const cakes = await response.json();
      if (cakes) {
        const newCakes = cakes.map((cake) => {
          const {
            id,
            image,
            cake_name,
            category,
            type,
            ingredients,
            instructions,
          } = cake;
          return {
            id,
            image,
            cake_name,
            category,
            type,
            ingredients,
            instructions,
          };
        });
        setCakes(newCakes);
        console.log(newCakes);
      } else {
        setCakes([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCakes();
  }, [fetchCakes]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cakes,
        setSearchTerm,
        searchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
