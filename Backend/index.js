const express=require("express")
const mongoDB=require("./db")
const users=require("./Model/User")
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("Welcome from server side ")
})



app.post('/login', (req, res) => {
  const { username, password } = req.body;


  function isValidUsername(username) {
    const alphanumeric = /^[a-zA-Z0-9]+$/;
    const length = /^.{6,12}$/;
  
    return alphanumeric.test(username) && length.test(username);
  }
  function isValidPassword(password) {
    return password.length >= 6;
  }
  
  if (!isValidUsername(username)) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ error: 'Invalid password' });
  }

 
  res.json({ message: 'Login success' });
});


app.get("/data", async (req , res) => {
    try {
      const data = await users.find({ companyId: req.body.companyId });
      res.send({ data: data });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });
app.listen(8000,()=>{
    console.log("listening the port at 8000")
})