
import Connection from './database/db.js';
import {app} from './app.js';
import dotenv from 'dotenv'


dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const PORT=process.env.PORT;




Connection(USERNAME,PASSWORD).then(
   ()=>{
    app.listen(PORT,()=>{console.log(`server is running on port +${PORT}`)});
    
   }
)
.catch((error)=>{
    console.log('error occure while connecting to database',error)
})