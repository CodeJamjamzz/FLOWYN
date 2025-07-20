import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config()
const supabaseURL = process.env.VITE_SUPABASE_URL
const supabaseANON_KEY = process.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseURL,supabaseANON_KEY);