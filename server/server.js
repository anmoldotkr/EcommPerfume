
// const express = require("express");
// const cors = require("cors");
// const ConnectDB = require("./modals/db.js")
// const ProductModel = require('./modals/productApi.js')
// const dotenv = require("dotenv");
// const emailRoute = require("./Routes/emailRoute.js");
// const userRoute = require("./Routes/userRoute.js")
// const initializePassport = require("./passport-config.js");
// const passport = require("passport");
// dotenv.config();

// initializePassport(passport)

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.use('/email',emailRoute)
// app.use('/api/users',userRoute)
// app.use('/api',userRoute) // this route for all the products
// // This line sets /api as the starting point for any routes in userRoute.
// // So, when the frontend calls /api/allproducts, it first goes to this entry point in server.js. Then, server.js sends it to userRoute, where it looks for /allproducts.
// // In other words, all routes in userRoute will now start with /api, making the final route /api/allproducts.
// ConnectDB()
// ProductModel()
// app.listen(5000, () => {
//   console.log("server is listen on 5000 port");
// });



const express = require("express");
const cors = require("cors");
const session = require("express-session"); // Add this
const ConnectDB = require("./modals/db.js");
const ProductModel = require("./modals/productApi.js");
const dotenv = require("dotenv");
const emailRoute = require("./Routes/emailRoute.js");
const userRoute = require("./Routes/userRoute.js");
const initializePassport = require("./passport-config.js");
const passport = require("passport");
dotenv.config();

initializePassport(passport);

const app = express();

// Add CORS middleware
app.use(cors());

// Parse incoming JSON
app.use(express.json());

// Add express-session middleware
app.use(
  session({
    secret: "your_secret_key", // Use a secure secret in production
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport.js and session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/email", emailRoute);
app.use("/api/users", userRoute);
app.use("/api", userRoute); // This route for all the products |  // this route for all the products
// // This line sets /api as the starting point for any routes in userRoute.
// // So, when the frontend calls /api/allproducts, it first goes to this entry point in server.js. Then, server.js sends it to userRoute, where it looks for /allproducts.
// // In other words, all routes in userRoute will now start with /api, making the final route /api/allproducts.

// Connect to the database and initialize the ProductModel
ConnectDB();
ProductModel();

// Server listener
app.listen(5000, () => {
  console.log("server is listen on 5000 port");
});
