const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const userModel = require("./modals/modals.js")

const initializePassport = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        // Find the user
        const user = await userModel.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Invalid Credentials" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid Credentials" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  // Serialize user to store in session
  passport.serializeUser((user, done) => done(null, user.id));

  // Deserialize user from session
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserModal.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

module.exports = initializePassport;
