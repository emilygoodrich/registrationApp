const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secretKey = 'the_key';
const app = express();
const port = 3001;

app.use(express.json());

usersRoute = require("./controllers/usersController");
app.use('/users/', usersRoute.usersController);

app.post('/signup', async (req, res) => {
  res.send('this is the sign up page!')
  const { username, password } = req.body;
  console.log( {username, password})
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 8);

  // Store user
  users.push({ username, password: hashedPassword });

  res.status(201).send('User created');
});

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username);

//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(401).send('Invalid credentials');
//   }

//   // Generate token
//   const token = jwt.sign({ userId: user.username }, secretKey, { expiresIn: '1h' });

//   res.status(200).send({ token });
// });


//the listener
app.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`Server is running on port ${port}`);
});