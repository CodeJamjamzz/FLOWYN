import { Fragment } from "react/jsx-runtime";
import { NavBar } from "../components/NavBar";
import { Starter } from "../components/Starter";
import { Footer } from "../components/Footer";
interface Props {
  setLogin: (value: boolean) => void;
}

export const Product = ({ setLogin }: Props) => {
  return (
    <Fragment>
      <NavBar />
      <Starter setLogin={setLogin} />
      <Footer />
    </Fragment>
  );
};
