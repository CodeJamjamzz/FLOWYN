import * as authService from "../services/authService.js";

export const signInUser = async (req, res) => {
  if (req.session.user) {
    const { username, email, userType } = req.session.user;
    return res.json({
      isLoggedIn: true,
      username,
      email,
      userType,
    });
  }

  const { username, email, password, userType } = req.body;
  try {
    const { data, error } = await authService.signInUser(
      username,
      email,
      password,
      userType
    );
    if (error) {
      console.log("Query failed:", error);
      const message = typeof error === "string" ? error : error?.message;
      return res.status(400).json({ message });
    }

    req.session.user = {
      username: data.username,
      email: data.email,
      userType: data.userType,
    };
    return res.json({
      isLoggedIn: true,
      username: data.username,
      email: data.email,
      userType: data.userType,
    });
  } catch (err) {
    res.status(500).json({ message: "sign in failed" });
    console.log("Sign in unsuccessfull");
  }
};

export const logInUser = async (req, res) => {
  if (req.session.user) {
    const { username, email, userType } = req.session.user;
    return res.json({
      isLoggedIn: true,
      username,
      email,
      userType,
    });
  }
  try {
    const { email, password } = req.body;
    const { data, error } = await authService.logInUser(email, password);

    if (error) {
      console.log("Query failed:", error);
      return res.json({ isLoggedIn: false, message: error });
    }

    req.session.user = {
      username: data.username,
      email: data.email,
      userType: data.userType,
    };
    return res.json({
      isLoggedIn: true,
      username: data.username,
      email: data.email,
      userType: data.userType,
    });
  } catch (err) {
    return res.json({
      isLoggedIn: false,
      message: "Login unsuccessful. Please try again.",
    });
  }
};

export const sessionCheck = (req, res) => {
  if (req.session.user) {
    const { username, email, userType } = req.session.user;
    return res.json({
      isLoggedIn: true,
      username,
      email,
      userType,
    });
  } else {
    return res.json({ isLoggedIn: false });
  }
};
