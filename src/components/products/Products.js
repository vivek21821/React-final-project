import React from "react";
import ProductCategoriesList from "./ProductCategoriesList";
import ProductsList from "./ProductsList";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <ProductsList />
      <ProductCategoriesList />
    </div>
  );
};

export default Products;
