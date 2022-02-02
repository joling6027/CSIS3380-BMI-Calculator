const express = require("express");
const bodyParser = require("body-parser");
const { addListener } = require("nodemon");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get("/bmi", (req,res) => {
    res.sendFile(__dirname + "/bmi.html");
})

app.post("/bmi", (req,res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    
    var bmi = weight / Math.pow(height*0.01,2); 
    // var result = document.querySelector('#result');
    let resulty = `Your BMI result is: ${bmi.toFixed(2)}`;

    // res.write('<p>' + result + '</p>');
    res.render('bmi', {result: resulty});
    res.send();
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
