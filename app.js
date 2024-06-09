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
const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/",(req,res)=>{

    //res.send('Hello everyone!');
    res.render('index',{username:'YngJira !!!',customer:["Harry","Potter","Ronnie"]});

})
app.listen(PORT,()=>{

    console.log ("Listening on port" + chalk.blue(" : ",PORT));
    debug ("Listening on port" + chalk.green(" : ",PORT));

})