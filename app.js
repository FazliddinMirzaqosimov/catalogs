const express = require("express");
const morgan = require("morgan");
const adminRoutes = require("./routers/adminRouter");
const categoryRoutes = require("./routers/categoryRouter");
const productRoutes = require("./routers/productRouter");

const app = express();

app.use(express.json());
app.use(express.static("."));
app.use(morgan("dev"));

app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);

module.exports = app;

// PASSWORD = T0IXJPWBrihRsQls
// DATABASE = mongodb+srv://islombek:<password>@cluster0.xyhpaf2.mongodb.net/?retryWrites=true&w=majority
// APP_URL = localhost:3000

// JWT_SECRET = thiswisjwtsecret
// JWT_EXPIRES = 90d
