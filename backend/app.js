const express = require('express');   // ✅ correct
const app = express();    
const userRoutes=require('./routes/user.routes')            // ✅ correct

const dotenv = require('dotenv');     // ✅ correct
dotenv.config();                      // ✅ correct (loads .env)
const connectDB=require('./db/db');
connectDB();
const cors = require('cors');         // ✅ correct
app.use(cors());     

// ✅ correct
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {           // ✅ correct
    res.send('hello world');
});
app.use('/users',userRoutes);

module.exports = app;                 // ✅ correct



