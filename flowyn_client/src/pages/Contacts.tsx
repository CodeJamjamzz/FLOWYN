import { Fragment } from "react/jsx-runtime";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ContactInfo } from "../components/ContactInfo";

export const Contacts = () => {
  return (
    <Fragment>
      <NavBar />
      <ContactInfo/>
      <Footer />
    </Fragment>
  );
};
