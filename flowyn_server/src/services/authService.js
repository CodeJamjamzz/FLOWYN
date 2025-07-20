    import { supabase } from '../supabase.js';
    import bcrypt from "bcrypt"

    const saltRounds = 10;

    export const signInUser = async (Username,UserEmail,UserPassword) => {
        const password = await bcrypt.hash(UserPassword,saltRounds)
        const {data,error} = await supabase
        .from("tbluser")
        .insert([{username: Username, email: UserEmail, password: password }])
        .select();

        return {data,error};    
    } 