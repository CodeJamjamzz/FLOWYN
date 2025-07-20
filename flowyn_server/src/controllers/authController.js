import * as authService from "../services/authService.js";

export const signInUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const { data, error } = await authService.signInUser(
      username,
      email,
      password
    );
    if (error) {
      console.log("Query failed:", error);
      return res.status(400).json({ message: error?.message || error });
    }

    req.session.user = data;
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "sign in failed" });
    console.log("unable to sign in user");
  }
};
