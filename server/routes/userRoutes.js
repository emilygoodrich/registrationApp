// const express = require('express')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const UserController = require('../controllers/usersController')

// // add a user router.post('/', UserController.createUser)
// //localhost:PORT
// router.post('/', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);

//         const user = new UserController.createUser({
//             username: req.body.username,
//             password: hashedPassword,
//         });
//         const savedUser = await user.save();
//         res.json(savedUser);
//     } catch(err) {
//         res.json({Error: "error"})
//     }
// })
// // get all users
// //localhost:PORT/api/users
// router.get('/', UserController.listUsers)
// // get a user by id
// //localhost:PORT/api/users/_ids
// router.get('/:id', UserController.listUser)

// module.exports = router
//render is a website and you gotta figure that out :3


const express = require('express')
const router = express.Router();
const UserController = require('../controllers/usersController')

// add a user
//localhost:PORT
//router.post('/', UserController.createUser)
router.post('/', (req, res) => {//post the questions
    res.send(['list', 'more'])
})
// get all users
//localhost:PORT/api/users
router.get('/', UserController.listUsers) //take the questions, then the server can take the info
// get a user by id
//localhost:PORT/api/users/_ids
router.get('/:id', UserController.listUser)

module.exports = router
