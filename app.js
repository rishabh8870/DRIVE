const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB();


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





