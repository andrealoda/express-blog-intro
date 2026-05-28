const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server del mio blog');
});


const posts = [
    {
        id: 1,
        title: 'Primo post',
        content: 'Questo è il contenuto del primo post',
        tag: ['javascript', 'nodejs']
    },
    {
        id: 2,
        title: 'Secondo post',
        content: 'Questo è il contenuto del secondo post',
        tag: ['html', 'css']
    },
    {
        id: 3,
        title: 'Terzo post',
        content: 'Questo è il contenuto del terzo post',
        tag: ['python', 'django']
    },
    {
        id: 4,
        title: 'Quarto post',
        content: 'Questo è il contenuto del quarto post',
        tag: ['react', 'javascript']
    },
    {
        id: 5,
        title: 'Quinto post',
        content: 'Questo è il contenuto del quinto post',
        tag: ['vue', 'javascript']
    }

];


app.get('/', (req, res) => {
    res.json(posts);
});
