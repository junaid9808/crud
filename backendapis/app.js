import router from './router/userRouter.js';
import express from "express"
import  bodyParser from 'body-parser'
import cors from "cors";
import mongoose from 'mongoose';
const port = 3000;

const app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://0.0.0.0:27017/crud-express",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database connected successfully...")
}).catch(err =>{
    console.log("could not connect to the database...", err)
    process.exit();
})

app.use(cors());
app.use("/", router)


app.get('/',(req,res)=>{
    res.send("hello from server")
})
app.all("*", (req, res)=>res.send("that router dosn't exist"))
app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
})