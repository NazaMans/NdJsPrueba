require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productos = require('./routes/productos');
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/productos', productos);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));
