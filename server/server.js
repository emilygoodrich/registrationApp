// const express = require('express');
// const app = express();
// const port = 3001;

// app.get('/', (req, res) => {
//     res.send('this is connecting')
// })
// // app.get('/log-in', (req, res) => {
// //     res.send('home page')
// // })
// app.listen(port, () => {
//     console.log(`listening on port ${port}`)
// })

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});