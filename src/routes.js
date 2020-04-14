const express = require('express');
const routes = express.Router();



//ROTA USADA PARA SELECIONAR DADOS OU FAZER INDEX(PUXAR DADO POR UMA PK)
routes.get("/user",function(req,res){
    return res.json({message:"dados selecionados: "});
});

//ROTA USADA PARA SALVAR DADOS - GERALMENTE OS NOMES SÃO ESCRITAS NO PLURAL
routes.post("/users",function(req,res){
    //DADOS DO CLIENTE VIRÃO NO BODY DA REQUISIÇÃO
    return res.json({newuser:req.body});
});

//ROTA USADA PARA ALTERAR DADOS - GERALMENTE OS NOMES SÃO ESCRITAS NO PLURAL
routes.put("/users/:id",function(req,res){
    //DADOS VIRÃO POR MEIO DE PARAMETROS NA REQUISIÇÃO
    return res.json({message:"dados editados: "+req.params.id});
});

//ROTA USADA PARA DELTAR DADOS
routes.delete("/user/:id",function(req,res){
    return res.json({message:"dados deletados: "+req.params.id});
});


module.exports = routes;