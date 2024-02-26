const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const passport = require('passport');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secretKey = 'the_key';
const app = express();//ok so //idk what's going on
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true})); //idk the difference ngl
app.use(express.static('js'));
app.use(express.static('public'));

//connecting to the database
const {mongoURI} = require('./config/database');
mongoose.connect(mongoURI)



app.get('/home', (req, res) => {
  console.log('ermmm') //but the form goes over to ???
  // const file = path.join(__dirname, '/public/home.html')
  // console.log('ok bitch u running but we dont like u')
  // res.sendFile(file);
  const file = path.join(__dirname, '/public/home.html')
    res.sendFile(file)
}) 
const userRoutes = require("./routes/userRoutes");
// originally app.use('/users/', userRoutes)
app.use('/users/', userRoutes);
//app.use('/signup', userRoutes) //ok so just add the mongo for now and then the auth
// app.use('/signup', async (req, res) => {
//   res.send('this is the sign up page!')
//   const { username, password } = req.body;
//   console.log( {username, password})
//   // Hash password
//   const hashedPassword = await bcrypt.hash(password, 8);
// app.use('/', (req, res) => {
//   res.send('this is the home page')
// })
//   // Store user
//   users.push({ username, password: hashedPassword });

//   res.status(201).send('User created');
// });

// app.use('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username);

//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(401).send('Invalid credentials');
//   }

//   // Generate token
//   const token = jwt.sign({ userId: user.username }, secretKey, { expiresIn: '1h' });

//   res.status(200).send({ token });
// });

app.on('uncaughtException', function (err) {
  console.log(err)
})
//the listener
app.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`Server is running on port ${port}`);
});