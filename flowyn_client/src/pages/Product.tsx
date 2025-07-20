import { Fragment } from "react/jsx-runtime";
import { NavBar } from "../components/NavBar";
import { Starter } from "../components/Starter";
import { Footer } from "../components/Footer";

export const Product = () => {
  return (
    <Fragment>
      <NavBar />
      <Starter />
      <Footer />
    </Fragment>
  );
};
