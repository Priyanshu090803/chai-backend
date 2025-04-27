
import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
app.use(cors({                            // use method configuration and middleware m kam ata h
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));                                  // cors will use to do setting in our all cross origin resourse sharing platform
app.use(cookieParser());


app.use(express.json({
        limit: "20kb"   
}))          // configuring json ki ky ky lera hu json m

app.use(express.urlencoded({
    extended:true,                 // jo bhi url ari h usko encode kro  eg:url k beech m kahi + ya % ka sign hota h 
    limit:"10kb"
}))

app.use(express.static("public"))      // ye static files, ya images apne server mai rakhne k kam ayega  , or public folder .


// routes
import userRouter from "./routes/user.route.js"
app.use("/api/v1/users",userRouter)

// this logic is for routing . jse hi /users type krega user , we will give control to userRouter like : register ,login etc
// now our routing will look like this:> https//localhost:3000//api/v1/users/register or https//localhost:3000/api/v1/users/user/login etc
// users k bad k route userRouter mai likhenge

export {app}