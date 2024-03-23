const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://Ram:Ram@bookstore.sxdiije.mongodb.net/?retryWrites=true&w=majority&appName=BookStore').then(
    () =>console.log('DB Connected')
)
//schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
  });
  
  //
  const User= mongoose.model("User", userSchema);
  
  //api
  app.get("/", (req, res) => {
    res.send("Server is running");
  });
  
  //sign up
  app.post("/signup", async (req, res) => {
    // console.log(req.body);
    const { email } = req.body;
  
    userModel.findOne({ email: email }, (err, result) => {
      // console.log(result);
      console.log(err);
      if (result) {
        res.send({ message: "Email id is already register", alert: false });
      } else {
        const data = userModel(req.body);
        const save = data.save();
        res.send({ message: "Successfully sign up", alert: true });
      }
    });
  });
  
//   //api login
//   app.post("/login", (req, res) => {
//     // console.log(req.body);
//     const { email } = req.body;
//     userModel.findOne({ email: email }, (err, result) => {
//       if (result) {
//         const dataSend = {
//           _id: result._id,
//           firstName: result.firstName,
//           lastName: result.lastName,
//           email: result.email,
//           image: result.image,
//         };
//         console.log(dataSend);
//         res.send({
//           message: "Login is successfully",
//           alert: true,
//           data: dataSend,
//         });
//       } else {
//         res.send({
//           message: "Email is not available, please sign up",
//           alert: false,
//         });
//       }
//     });
//   });

//api login
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ email: username });
      if (!user) {
        return res.status(400).send({
          message: "Invalid credentials. Email is not registered.",
          alert: false,
        });
      }
  
      // Compare passwords
      const isPasswordMatch = await user.comparePassword(password);
      if (!isPasswordMatch) {
        return res.status(400).send({
          message: "Invalid credentials. Password does not match.",
          alert: false,
        });
      }
  
      // If credentials are correct, send user data back
      const dataSend = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      };
  
      res.send({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).send({
        message: "Internal Server Error",
        alert: false,
      });
    }
  });
  

  

app.listen(5000, () => console.log('Server running...'));

module.exports = User;