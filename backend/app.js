const express = require('express');   // ✅ correct
const app = express();                // ✅ correct

const dotenv = require('dotenv');     // ✅ correct
dotenv.config();                      // ✅ correct (loads .env)
const connectDB=require('./db/db');
connectDB();
const cors = require('cors');         // ✅ correct
app.use(cors());     

// ✅ correct



app.get('/', (req, res) => {           // ✅ correct
    res.send('hello world');
});

module.exports = app;                 // ✅ correct



