const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://basha61507124:ushman123@cluster2.h8edgjl.mongodb.net/registration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });


const contactSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Subject: String,
  Message: String,
});


const Contact = mongoose.model("Contact", contactSchema); 

module.exports = Contact; 