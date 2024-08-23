const express = require('express');
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv/config');
const blogRouter = require('./routes/blogRoute');
const errorHandler = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/notFound');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoute');


const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')))
// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}));
connectDB();

// route
// app.get('/', (req, res) => {res.send()});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'))
})
app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter);



// error handler
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => {
    console.log("Server is running on port " + port);
})