import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from './MongoDB/Connect.js';
import PostRoutes from './Routes/PostRoutes.js';
import DalleRoutes from './Routes/DalleRoutes.js';
    
// allows to pull our evnviroment from dotenv variables 
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}))

app.use('/api/v1/Post', PostRoutes);
app.use('/api/v1/Dalle', DalleRoutes);
//this tells us wheather our app is running 
app.get('/', async (req,res) => {
    res.send("Hello from DALL-E")
    
})

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(3000,() => console.log ('Server has started on the port http://localhost:3000'))
    }catch (error){
        console.log(error);
    }
    
}

startServer();