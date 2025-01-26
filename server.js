import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
import { connectDB } from "./src/config/mongo.config.js";
import "./src/config/passport.config.js";
import userRoutes from "./src/routes/users.router.js";
import productRoutes from "./src/routes/products.router.js";
import sessionRoutes from "./src/routes/sessions.router.js";
import cartRoutes from "./src/routes/cart.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/carts", cartRoutes);

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Servidor corriendo en el puerto ${PORT}`)
  );
});
