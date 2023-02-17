const  error  = require('console');
const fs = require('fs');
const express = require('express');
const path = require('path');
const datacontent = require('./data');
const urlCSS = path.join('/css/main.css').replace(/\\/g, '/')
const urlJs = path.join('/js/main.js').replace(/\\/g, '/')


const htmlBaseCreator = function(filenameHTML,filenameCSS,filenameJS){

    
    fs.mkdir('./public',(error)=>{
        console.log('public directory created')
    })
    fs.writeFile(`./public/${filenameHTML}.html`,datacontent(urlCSS,urlJs),(error)=>{
        console.log('html created')
    })
    fs.mkdir ('./public/src',(error)=>{
        console.log('src create')
    })
    fs.mkdir ('./public/src/img',(error)=>{
        console.log('src/img create')
    })
    fs.mkdir ('./public/src/font',(error)=>{
        console.log('src/font create')
    })
    fs.mkdir ('./public/css',(error)=>{
        console.log('create directory css in asset')
    })
    fs.mkdir ('./public/js',(error)=>{
        console.log('create directory js in asset')
    })
    fs.writeFile(`./public/css/${filenameCSS}.css`,'/* css here */',(err)=>{
        console.log('css created')
    })
    fs.writeFile(`./readme.txt`,'require nodeJS 14.13.1 \n require express \n to start project "node init" (create full directory and files) \n "node server" for starting , you must find static files in ./public directory',(err)=>{
        console.log('readme for documentation')
    })
    fs.writeFile(`./public/css/${filenameCSS}.css`,'/* css here */',(err)=>{
        console.log('css created')
    })
    fs.writeFile(`./public/js/${filenameJS}.js`,'console.log("js at working")',(err)=>{
        console.log('js created')
    })
}
module.exports = htmlBaseCreator
