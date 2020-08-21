const express = require('express');

const app = express();

//check that server is working
app.get('/', (req, res) => res.json({ msg: 'Welcome to Movie Maker API' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
