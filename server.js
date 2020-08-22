const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//connect DB
connectDB();

//use cors
app.use(cors());

//initialize middleware
app.use(express.json({ extended: false }));

//check that server is working
app.get('/', (req, res) => res.json({ msg: 'Welcome to Movie Maker API' }));

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/movies', require('./routes/movies'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
