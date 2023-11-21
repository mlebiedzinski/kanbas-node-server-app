import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
})
);
CourseRoutes(app);
app.use(express.json());
ModuleRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000);

