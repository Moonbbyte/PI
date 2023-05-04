const express =require('express');
const morgan= require('morgan');
const cors=require('cors')


var app=express();
var corsOption={origin:true,optionsSuccessStatus:200};
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOption));
app.use(express.urlencoded({extended:true}));
let puerto=8080

//variables ast 

app.listen(puerto, function(){
    console.log('Escuchando en el puerto 8080')
});

app.get('/', function (req,res){
    res.json({mensaje:"hola mundo"})
})
app.post('/sumar', function (req,res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    //console.log(req.body)
    console.log(`Me esta llegando una peticion de suma, el resultado es: ${num1+num2}`)
    res.json({r:num1+num2})
})
