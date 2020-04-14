//IMPORTÇÃO DAS LIBS E ARQUIVO DE ROTAS DA APLICAÇÃO
const express = require('express');
const routes = require('./routes');

//INSTÂNCIA(INIT) DO EXPRESS
const app = express();
app.use(express.json()); //FAZER SERVIDOR ENTENDER REQUISIÇÕES JSON
app.use(routes);//USAR ROTAS DO ROUTES

app.listen(3003,function(){
    console.log("servidor está rodando na porta 3003");
});


///SERVIDOR PARA CRIAR NOÇÕES BÁSICAS DE NODE, AINDA NÃO FOI IMPLEMENTADO NENHUM TIPO DE PADRÃO OU BOAS PRÁTICAS