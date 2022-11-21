const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const sequelize = require('./util/database')

const User = require('./models/user');

const userRouter = require('./routes/user');

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json({extended:false}))



app.use(userRouter)

sequelize
.sync()
// .sync({force:start})
.then(()=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)
})