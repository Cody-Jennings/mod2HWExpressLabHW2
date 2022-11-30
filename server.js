const express = require('express');
const app = express();
const port = 3000;
 

//Greeting
app.get('/greeting', (req, res) => {
    res.send('Hello, stranger!')
  })

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const tip = req.params.total * req.params.tipPercentage
    const actualTip = tip/100
    res.send(`Thank you for providing excellent service! You have earned a tip of $` + actualTip + `!`)
  })


//Greeting :name specific
app.get('/greeting/:name', (req, res) => {
    res.send('It`s been a month of Sundays since I saw you last ' + req.params.name + ' !')
  })




app.listen(port, function () {
    console.log('Listening on port 3000');
  });