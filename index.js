import express from "express";
import "./config/db.js";
import { authRouter } from "./routes/auth.route.js";
//const cartRoutes = require('./routes/cart');
//import {cart} from "./routes/cart.js";

const app = express();

app.use(express.json());

app.use("/api", authRouter);
//app.use('/api/products', productRoutes);
//app.use('/api/cart', cartRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
