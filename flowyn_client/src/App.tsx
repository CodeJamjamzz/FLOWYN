import { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Product } from "./pages/Product";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import axios from "axios";
import { Landing } from "./pages/Landing";
import { useAuth } from "./store/useAuth";
import { useProfile } from "./store/useProfile";

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false)
  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const setLoggedIn = useAuth((state) => state.setLoggedIn);
  const setUsername = useProfile((state) => state.setUsername);
  const setEmail = useProfile((state) => state.setEmail);
  const setUserType = useProfile((state) => state.setUserType);

  const sessionCheck = async () => {
    await axios("http://localhost:3000/api/session", { withCredentials: true })
      .then((response) => {
        setLoggedIn(response.data.isLoggedIn);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setUserType(response.data.userType);
      })
      .catch((err) => {
        console.error("session check error", err);
      });
  };

  useEffect(() => {
    sessionCheck();
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Landing /> : <Navigate to="/Product" />}
          ></Route>
          <Route
            path="/Product"
            element={<Product setLogin={setLoggedIn} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/Landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
