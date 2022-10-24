const express =require('express')
const cors =require('cors')

const app =express()
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')

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

app.listen(port, ()=>{
    console.log(`learn online running on port, ${port}`)
})