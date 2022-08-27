import classes from "./index.module.css";

import { ProductItem } from "../ProductItem";

export const ProductList = () => (
  <>
    <h2 className={classes.title}>Most Ordered</h2>
    <div className={classes.layout}>
      {[
        {
          id: 1,
          title: "Tuna Sushi",
        },
        {
          id: 1,
          title: "Tuna Sushi",
        },
        {
          id: 1,
          title: "Tuna Sushi",
        },
      ].map(product => <ProductItem {...product} />)}
    </div>
  </>
);