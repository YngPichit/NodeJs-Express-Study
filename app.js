const express = require('express');
//const chalk = require('chalk');
import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug';
const debug = createDebug('app');
// const debug = require('debug')('app');
import morgan from 'morgan';
// const morgan = require('morgan')
//const path = require('path');
//import products from "./data/products.json" assert {type:"json"};
//const products = require("./data/products.json");
import path from 'path';
import { assert } from 'console';
const __dirname = path.resolve();
//const productRouter = express.Router();
const app = express();
const PORT = process.env.PORT || 4000;
import productsRouter from "./src/views/router/productsRouter" assert {type :"js"};

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

// productRouter.route("/").get((req,res)=>{
    // res.render("products",{
        // products,
// });
// });
// productRouter.route("/:id").get((req,res)=>{
    // const id = req.params.id;
    // res.render("product",{
        // product:products[id],
    // })
// });

app.use("/products",productsRouter);

app.get("/",(req,res)=>{

    //res.send('Hello everyone!');
    res.render('index',{username:'YngJira !!!',customer:["Harry","Potter","Ronnie"]});

})
app.listen(PORT,()=>{

    console.log ("Listening on port" + chalk.blue(" : ",PORT));
    debug ("Listening on port" + chalk.green(" : ",PORT));

})