import { createContext, useContext, useState } from "react";
import { products } from "../data/data";
import { categoryContext } from "./CategoriesContext";

export const productsContext = createContext();

export function ProductsProvider(props) {
  const [prods, setProds] = useState(products);
  const { categories } = useContext(categoryContext);

  function getHiddenCategoriesValue() {
    let cats = categories.filter((cat) => {
      return cat.selected === false;
    });

    return cats.map((cat) => cat.value);
  }

  function updateProductsOnCatChange(category) {
    const hidden = getHiddenCategoriesValue();
    setProds(
      products.filter((product) => {
        let check = true;
        hidden.forEach((cat) => {
          if (product.category.includes(cat)) {
            return (check = false);
          }
        });
        return check;
      })
    );
  }

  return (
    <productsContext.Provider
      value={{ prods, setProds, updateProductsOnCatChange }}
    >
      {props.children}
    </productsContext.Provider>
  );
}
