const express = require('express');

const app = express();

//check that server is working
app.get('/', (req, res) => res.json({ msg: 'Welcome to Movie Maker API' }));

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/movies', require('./routes/movies'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
