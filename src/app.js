const express = require('express')
const hbs = require('hbs')
const find_temp = require('./weather.js')
const path = require('path')
const app = express()

app.set('view engine', 'hbs')

const public_dir = path.join(__dirname,"../public")
app.use(express.static(public_dir))

const viewsPath = path.join(__dirname,"../templates/view")
app.set('views',viewsPath)

const partialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath)

app.disable('x-powered-by')
app.disable('etag')

app.get('',(req,res)=>{
    res.render('index',{title: "WEATHER"})
})
app.get('/weather',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    if(!req.query.address){
        return res.send({error:"Query parameter missing!"})
    }
    find_temp(req.query.address, (str)=>res.send({address:req.query.address,temp:str }) )
})

app.get('/products', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    if(!req.query.search){
        return res.send({error:"Query parameter missing!"})
    }
    res.send({products:[]})
})

app.get('*', (req,res)=>{
    res.send('<H1> ERRROR 404 </H1>')
})

app.listen(3000, ()=> {console.log("server is app")})