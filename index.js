const express = require('express')
const cors = require('cors');
const routes = require('./routes')
const connectDB = require('./db')
    //   server      // anything
const server = express();

server.use(express.json())
server.use(cors())

connectDB()
server.use('/api/v1',routes)

const port= 5001

server.listen(port, ()=>{console.log(`server running on port ${port}`);})