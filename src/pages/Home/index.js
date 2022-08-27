import { Scroll, Layout, Button } from "../../components";

import classes from "./index.module.css";

import { ProductList, Title } from "./components";

export const Home = () => {
  return (
    <Scroll>
      <Layout className={classes.background}>
        <div className={classes.layout}>
          <Title />
          <p className={classes.subtitle}>The big amount of combinations</p>
          <p className={classes.description}>
            The best service in Ukriane, taste the best foods of Japan culture
            at your house, get delivered with 30 mins instantly.
          </p>
          <Button className={classes.button}>Get to know more</Button>
          <ProductList />
        </div>
      </Layout>
    </Scroll>
  );
};