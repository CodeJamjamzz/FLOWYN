import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
