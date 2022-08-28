

import { Scroll, Layout, Button } from "../../components";
import { useDevice } from '../../hooks';

import classes from "./index.module.css";

import { ProductList, ProductRoulette, Title } from "./components";
import { useEffect, useState } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const { isMobile } = useDevice();

  useEffect(() => {
    fetch('/api/products').then((data) => {
      setProducts(data);
    });
  }, []);
  
  return (
    <Scroll>
      <Layout className={classes.background}>
        <div className={classes.layout}>
          <div className={classes.gap}>
            <Title />
            <p className={classes.subtitle}>The big amount of combinations</p>
            <p className={classes.description}>
              The best service in Ukriane, taste the best foods of Japan culture
              at your house, get delivered with 30 mins instantly.
            </p>
            <Button className={classes.button}>Get to know more</Button>
          </div>
          { isMobile ? <ProductRoulette products={products} /> : <ProductList products={products} /> }
        </div>
      </Layout>
    </Scroll>
  );
};