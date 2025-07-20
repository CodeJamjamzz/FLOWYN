import authRoute from "./routes/authRoute.js"
import express from "express"
import cors from "cors"
import session from "express-session"

const app = express();
const port = 3000;

//middleware 
app.use(cors());
app.use(express.json())
app.use(session({
  name: 'codeJam',
  secret: process.env.SESSION_SECRET, // Store in .env
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,          // Prevents JavaScript access (XSS protection)
    secure: false,           // Set to true in production with HTTPS
    sameSite: 'lax',         // CSRF protection
    maxAge: 1000 * 60 * 60   // 1 hour
  }
}));

app.use("/api", authRoute)

app.listen(port, (err) => {
    if(err){
        console.log("There is an error",err);
    } else {
        console.log("The server is running on port 3000");
    }
})


