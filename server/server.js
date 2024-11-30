
const express = require("express");
const cors = require("cors");
const ConnectDB = require("./modals/db.js")
const ProductModel = require('./modals/productApi.js')
const dotenv = require("dotenv");
const emailRoute = require("./Routes/emailRoute.js");
// const session = require('express-session')
const userRoute = require("./Routes/userRoute.js")

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use('/email',emailRoute)
app.use('/api/users',userRoute)
app.use('/api',userRoute) // this route for all the products
// This line sets /api as the starting point for any routes in userRoute.
// So, when the frontend calls /api/allproducts, it first goes to this entry point in server.js. Then, server.js sends it to userRoute, where it looks for /allproducts.
// In other words, all routes in userRoute will now start with /api, making the final route /api/allproducts.
ConnectDB()
ProductModel()
app.listen(5000, () => {
  console.log("server is listen on 5000 port");
});
