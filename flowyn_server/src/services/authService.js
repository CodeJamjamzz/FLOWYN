import { supabase } from "../supabase.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const signInUser = async (
  Username,
  UserEmail,
  UserPassword,
  UserType
) => {
  const password = await bcrypt.hash(UserPassword, saltRounds);
  const { data, error } = await supabase
    .from("tbluser")
    .select("*")
    .eq("email", UserEmail)
    .single();

  if (error || !data) {
    const { data, error } = await supabase
      .from("tbluser")
      .insert([
        {
          username: Username,
          email: UserEmail,
          password: password,
          isDeveloper: UserType,
        },
      ])
      .select();

    return { data, error };
  } else {
    return {error: "User already exist"}
  }
};

export const logInUser = async (UserEmail, UserPassword) => {
  const { data, error } = await supabase
    .from("tbluser")
    .select("*")
    .eq("email", UserEmail)
    .single();

  if (error || !data) {
    console.log("User does not exist");
    return { error: "User not found" };
  } else {
    const match = await bcrypt.compare(UserPassword, data.password);
    if (match) {
      return { data, error };
    } else {
      return { error: "Password not match" };
    }
  }
};
