const UserModal = require("../modals/modals.js");
const bcrypt = require("bcryptjs");
const ProductModel = require('../modals/productApi.js')

const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input fields
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Check if the user already exists
    const existingUser = await UserModal.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists!" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new UserModal({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Return success response
    return res.status(201).json({ message: "User Registered Successfully!" });
  } catch (error) {
    console.error("Error in Registration:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
  
// login controller 
const loginController = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Error during authentication:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (!user) {
      // If user is not found or invalid credentials
      return res.status(400).json({ message: info.message || "Invalid Credentials" });
    }

    // Log the user in
    req.login(user, (err) => {
      if (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Server error" });
      }

      // Send a success response with the user info or token if needed
      return res.status(200).json({
        message: "Login Successful",
        user: { id: user.id, email: user.email },
      });
    });
  })(req, res, next);
};

// Logout Controller
const logoutController = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).json({ message: "Server error" });
    }

    // Send a success response
    res.status(200).json({ message: "Logout successfully" });
  });
};

// -------------------- product Api ---------------------
const productApi = async(req,resp)=>{
    try {

      const {searchQuery} = req.query;
      if (searchQuery){
        let query = {};
        query.name = { $regex: searchQuery, $options: 'i' }; // Case-insensitive search on product name
        const products = await ProductModel.find(query);
        resp.json(products);
      }
      else
      {
        // Fetch all products without pagination
        const products = await ProductModel.find();
        resp.json(products);
      }


      console.log("Successfully fetched all products");
  } catch (error) {
      console.log("Error fetching products:", error);
      resp.status(500).json({ message: "Internal server Error" });
  }
}

// ----------------- Search and Filtering ----------------------

module.exports = {
    loginController,
    registerController,
    logoutController,
    productApi,
    
  };
  


