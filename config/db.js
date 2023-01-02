const mongoose = require('mongoose');

// (node:15300) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` 
// if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.pogspv9.mongodb.net/crm', {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log("Connection error : ", err))