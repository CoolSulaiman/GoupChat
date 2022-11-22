const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const sequelize = require('./util/database')
require('dotenv').config()
const User = require('./models/user');
const Chat = require('./models/Chat')

const userRouter = require('./routes/user');

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json({extended:false}))



app.use(userRouter)

User.hasMany(Chat)
Chat.belongsTo(User)


sequelize
.sync()
// .sync({force:true})

.then(()=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)
})