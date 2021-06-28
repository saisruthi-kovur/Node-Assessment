import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/route';
import mongoConnect from './database/db';
import errorRoutes from './controller/errorController';

const app = express();
app.use(bodyParser.json());
app.use(routes);
app.use(errorRoutes.urlNotFound);

mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true})
.then(
    app.listen(8080, () =>{console.log("Server is running");})
)
.catch(err =>{
    console.log(err)}
);