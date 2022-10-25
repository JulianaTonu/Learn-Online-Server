const express =require('express')
const cors =require('cors')

const app =express()
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')
const tutorials=require('./data/tutorials.json')

app.get('/', (req,res)=>{
    res.send('learn online server is running')
});

app.get('/categories' , (req, res)=>{
    res.send(categories)
})

app.get('/categories/:id',(req, res)=>{
    const id = req.params.id;
    const category= categories.find(ct => ct.id === id)
    res.send(category)
})

app.get('/tutorials', (req, res)=>{
    res.send(tutorials)
})

app.get('/tutorials/:id', (req, res)=>{
    const id = req.params.id
    const s_tutorials = tutorials.find(t => t._id === id)
    res.send(s_tutorials)
})

app.listen(port, ()=>{
    console.log(`learn online running on port, ${port}`)
})