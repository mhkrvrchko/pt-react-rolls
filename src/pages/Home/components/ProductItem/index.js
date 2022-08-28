import { useHistory } from "react-router-dom";

import { Button } from "../../../../components";

import classes from "./index.module.css";

export const ProductItem = ({ id, title, order }) => {
  const history = useHistory();

  const handleItemClick = () => history.push(`/product/${id}`);

  return (
    <figure
      key={id}
      className={classes.product + " " + classes[`product-order-${order}`]}
    >
      <img src={`assets/images/products/${id}.png`} />
      <figcaption>{title}</figcaption>
      <Button fixed onClick={handleItemClick}>
        ORDER
      </Button>
    </figure>
  );
};