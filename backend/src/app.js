import express from "express";
import userRoutes from "./routes/user.routes.js";
const app =express();
app.use(express.json())
//declare routes
app.use("/api/v1/users",userRoutes);// base route
//example route: http://localhost:5000/api/v1/users/register  //Combined

export default app;