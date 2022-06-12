//referenciando o mongoose
const mongoose = require('mongoose');

//criando oque vai ter no meu banco de DB
const postSchema = new mongoose.Schema({
    nome:{                     //nome
        type: String,
        required: true,

    },
    content:{                 //conteudo
        type: String,
        required: true
    },
    creatAt:{                 //data
        type: Date,
        default: Date.now()
    }
})
//colocando o schema como model
const Post = mongoose.model('Post',postSchema )//passo dois parametros 1° String: nome tabela e 2° minha vairavel com os dados
//exportando o modulo
module.exports = Post