const express = require('express');
const employeeRouter = require('./routes/employeeRouter');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');



connectDB();


app.use(express.json());

const PORT=process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Bienvenue dans mon api');
})

app.use('/api/employees', employeeRouter)

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
})