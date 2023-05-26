const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://akhil-project:akhil-project123@cluster0.cfq5m.mongodb.net/recipe-book', 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Connected Successfully"))
