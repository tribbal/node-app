const express = require('express') ;

const app = express() ;

    app.get('/api', ( req , res )=>{
        res.send("Jesus Cristo é Senhor")
    } )  


app.listen(3000 , ()=>{
    console.log("Servidor Funcionando")
})