const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route files 
const bootcamp = require('./routes/bootcamp.route');

// load env var
dotenv.config({ path : './config/config.env'});

const app = express();

// Mount routers
app.use('/api/v1/bootcamp', bootcamp)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}




const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))