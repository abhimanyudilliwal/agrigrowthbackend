
var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors")
var app = express();
const dbCon = require("./Db/Db")
const Signup =require("./Route/signup")
const Form =require("./Route/form")
const Ownland =require("./Route/ownland")
const Elseland=require("./Route/elseland")








app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// profile details 

// otp system 


app.use("/api", Signup)
app.use("/api", Ownland)
app.use("/api", Elseland)
app.use("/api", Form)

app.get('/', (req, res) => {
   return res.send('<h2>Welcome to Express App<h2>');
})

var Port = process.env.PORT || 3001;

app.listen(Port, (err) => {
   if (err) {
      console.log(err)
   } else {
      
      dbCon
      console.log('Server is listening at ' + ':' + Port);
   }
});