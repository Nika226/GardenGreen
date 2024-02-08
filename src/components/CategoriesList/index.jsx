import { useEffect } from "react";
import { getAllCategories } from "../../storage/slices/categoriesSlices";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";

function CategoriesList() {
  const dispatch = useDispatch();
  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  function getCategoryProducts() {}

  return (
    <div className={styles.box}>
      {categoriesList.map((category) => {
        return (
          <div
            onClick={() => getCategoryProducts()}
            className={styles.category}
            key={category.id}
          >
            <img
              className={styles.img_size}
              src={"http://localhost:3333/" + category.image}
              alt="category image"
            />
            <p>{category.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesList;
