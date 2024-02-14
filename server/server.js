const express = require('express');
const app = express();
const port = 3001;
app.use('/users/', require('./routes/userRoutes.js'));

//the listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});