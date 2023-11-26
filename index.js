//solicito el modulo de express y luego guardo el modulo express en una
//constante llamada app
const express = require('express');
const ejs = require('ejs')


const app = express(); 
app.set('view engine','ejs')


//creacion de rutas
//metodo uno por uno//
/////////////////////////////////////////////////
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/contact',(req, res)=>{
    res.sendFile(__dirname + '/static/contact.html')
})

app.get('/about',(req, res)=>{
    res.sendFile(__dirname + '/static/about.html')
})

/*app.get('/style.css',(req, res)=>{
    res.sendFile(__dirname + '/static/style.css')
})*/

app.use(express.static('public')) //metodo para llamar  archivos.html directamente de public

//renderiar vistas con ejs//
////////////////////////////////////////
app.get('/welcome-web',(req, res) =>{
    res.render('welcome-web')
})

app.get('/registro',(req, res) =>{
    res.render('registro')
})






//crear servidor en el puerto 3000
//////////////////////////////////////////////

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});