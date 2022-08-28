import classes from "./index.module.css";

import { ProductItem } from "../ProductItem";

export const ProductList = ({ products }) => (
  <>
    <h2 className={classes.title}>Most Ordered</h2>
    <div className={classes.layout}>
      {products.slice(0, 3).map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  </>
);