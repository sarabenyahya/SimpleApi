const express = require('express');
const employeeRouter = require('./routes/employeeRouter');
const app = express();

app.use(express.json());

const PORT=5000;

app.get('/', (req, res) => {
    res.send('Bienvenue dans mon api');
})

app.use('/api/employees', employeeRouter)

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
})