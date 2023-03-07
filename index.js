const express = require('express')
const app=express();
const bodyParser=require('body-parser')
const { connectToDb, getDb } = require('./db')
const { ObjectId } = require('mongodb')

// db connection
let db
connectToDb((err) => {
    if (!err) {
        app.listen(process.env.PORT || 9000, () => {
        })
        db = getDb()
    }
})

// app.listen(9000,()=>{
//     console.log("App runing on port 9000");
// })

// ejs setup
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    // let blogs = []
    // db.collection('blogs')
    //     .find()
    //     .sort({ _id: -1 })
    //     .forEach(blog => blogs.push(blog))
    //     .then(() => {

    //         res.render('index', { articles: blogs })
    //     })
    //     .catch((err) => {
    //         res.status(500).json({ error: 'could not get data' })
    //     })
    res.render('newPage');

})