import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import style from "./Modal.module.css";

const ProductCategoriesList = () => {
  const [productcategories, setProductCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const deleteHandler = (e) => {
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    let categoriesData = obj["categories"];
    categoriesData.splice(categoriesData.indexOf(e.target.id), 1);
    obj = {
      ...obj,
      categories: categoriesData,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  };
  useEffect(() => {
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  }, []);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const newCategoryHandler = (e) => {
    setNewCategory(e.target.value);
  };

  const addCategoryHandler = () => {
    if (newCategory === "") {
      alert("Please Enter a New Category");
      return;
    }
    productcategories.push(newCategory);
    console.log(productcategories);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      categories: productcategories,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
    setShowModal(false);
    setNewCategory("");
  };

  return (
    <div className={styles.catcontainer}>
      <h2>Product Categories</h2>
      {showModal && (
        <div className={style.modal}>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="productcat">Category Name</label>
            <input
              type="text"
              value={newCategory}
              id="productcat"
              onChange={newCategoryHandler}
            />
            <button className="btn" onClick={addCategoryHandler}>
              Add Category
            </button>
            <button className="btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {!showModal && (
        <>
          <div className={styles.tablebody}>
            <table>
              <tbody>
                {productcategories.map((item, i) => (
                  <tr key={i}>
                    <td>{item}</td>
                    <td>
                      <i
                        className="fa fa-trash-o"
                        id={item}
                        onClick={deleteHandler}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="btn" onClick={showModalHandler}>
            Add New Category
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCategoriesList;
