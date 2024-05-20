import { createContext, useState, useContext } from "react";
import { cats } from "../data/data";
import { notificationContext } from "./NotificationContext";

export const categoryContext = createContext();

export function CategoriesProvider(props) {
  const [categories, setCategories] = useState(cats);
  const [removedCat, setRemovedCat] = useState();
  const { show } = useContext(notificationContext);

  function updateCategories(category) {
    function checkSelectedCats() {
      let sum = 0;
      [...categories].forEach((cat) => {
        if (cat.selected === true) {
          sum++;
        }
      });
      if (sum > 1) {
        return true;
      } else {
        return false;
      }
    }
    if (checkSelectedCats()) {
      const index = [...categories].indexOf(category);
      categories[index].selected = !categories[index].selected;
      setCategories([...categories]);
    } else {
      if (!category.selected) {
        const index = [...categories].indexOf(category);
        categories[index].selected = !categories[index].selected;
        setCategories([...categories]);
      } else {
        show("you must have at least 1 category", true);
      }
    }
  }


  return (
    <categoryContext.Provider
      value={{
        categories,
        updateCategories,
        removedCat,
        setRemovedCat,
      }}
    >
      {props.children}
    </categoryContext.Provider>
  );
}
