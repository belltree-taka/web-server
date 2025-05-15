// index.js
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
const app = express()

app.use(express.urlencoded({ extended: false }))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('__dirname:', __dirname);



app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

// sendメソッドが内部的にJSON.stringifyを実行してくれるので通常のオブジェクト形式で記述可
// ブラウザにhttp://localhost:3000/api/v1/usersを記述してアクセス！
app.post('/api/v1/quiz', (req, res) => {
    const answer = req.body.answer;
    if(answer === '2'){
        res.redirect('/correct.html')
    }else{
        res.redirect('/wrong.html')
    }
})

// app.get('/api/v1/users', (req, res) => {
//     res.send({
//         name: 'Takaharu',
//         age: 36
//     })
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('3000番ポートでサーバー起動中')
})
