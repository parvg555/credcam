import mongoose from 'mongoose'
import express from 'express'
import Cors from 'cors'

import Images from './imagesModel.js'

const app = express()

app.use(Cors());

const DBusername = "parv";
const DBpassword = "parv";
const DBname = "geekstat-cluster";
const DBcluster = "t9y6a2j";

const port = process.env.PORT || 8002;

const connection_url = `mongodb+srv://${DBusername}:${DBpassword}@${DBname}.${DBcluster}.mongodb.net/CredCam?retryWrites=true&w=majority`;


app.get('/getImages',async (req,res) => {
    await Images.find({username:"aditya"}).then((response) => {
        res.send(response)
    })
    res.send({
        "hello":"hello"
    })
})

mongoose
    .connect(connection_url)
    .then((result) => {
        console.log("Connected To Database");
        app.listen(port, () => console.log(`Listening on Localhost:${port}`))
    })
    .catch((err) => {
        console.log('\x1b[31m',"Error Connecting to Database");
    });