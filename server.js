
const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apitRoutes');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();


// Use apiRoutes
app.use('/api', apiRoutes);


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});