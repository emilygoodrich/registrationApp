const mongoDB_URL=process.env.mongoDB_URL || 'mongodb://0.0.0.0:27017/registration-app-users';
module.exports={mongoURI:mongoDB_URL}

//?directConnection=true