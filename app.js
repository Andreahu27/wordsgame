const express = require("express")

const app = express()
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get("/", (req,res) => {
    const randomWords = require('random-words') 
    const test = 123456789
    res.render("home", {randomWords, test})
})

// app.get("/game", (req,res) => {
//     const data = req.query
//     const {numWord, numTries} = data
//     module.exports = data

    
    
//     res.render("game", {numWord, numTries, hiddenWord})
// })

app.listen(3000, () => console.log("Connected"))















