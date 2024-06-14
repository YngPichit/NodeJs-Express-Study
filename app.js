//const express = require('express');
//const chalk = require('chalk');
import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug';
const debug = createDebug('app');
// const debug = require('debug')('app');
import morgan from 'morgan';
// const morgan = require('morgan')
//const path = require('path');
import path from 'path';
const __dirname = path.resolve();
const productRouter = express.Router();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

productRouter.route("/").get((req,res)=>{
    res.render("products",{
        products:[
            {Title:'เอสเพรสโซ่',Description:'เข้มข้น ขมพิเศษ',Price:'60'},
            {Title:'Americano',Description:'เข้มข้น ไม่ใส่นม',Price:'45'},
            {Title:'Mocar',Description:'เข้มข้น ผสมโกโก้',Price:'65'},
            {Title:'คาปูชิโน่',Description:'เข้มข้น ราดครีมนม',Price:'55'},
        ],
    });
});
productRouter.route("/1").get((req,res)=>{
    res.send('Hello World !! I am Product 1');
});

app.use("/products",productRouter);

app.get("/",(req,res)=>{

    //res.send('Hello everyone!');
    res.render('index',{username:'YngJira !!!',customer:["Harry","Potter","Ronnie"]});

})
app.listen(PORT,()=>{

    console.log ("Listening on port" + chalk.blue(" : ",PORT));
    debug ("Listening on port" + chalk.green(" : ",PORT));

})