const express = require('express');
const app = express();
const Post = require('./models/post')
const porta = 3000;

app.use(express.json());//os dados das rotas passa pelo o USE

app.get('/hello_word', (req,res)=>{
   res.send('testando')
   // res.write('<h1> DEUS e fiel <h1>')
}),
app.post('/post', (req, res)=>{
    const post =  req.body.name
    res.send(` ${post}`)
})
app.post('/teste',async (req,res)=>{
    const {nome , content} = req.body;
    const posts = await Post.create({nome , content})
    res.send(posts)
})

app.listen(porta,()=>{
    console.log(`servidor rodando na:${porta}`)
})