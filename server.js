const express = require('express');
const app = express();
const port = 3000;
 

//Greeting
app.get('/greeting', (req, res) => {
    res.send('Hello, stranger!')
  })


//Greeting :name specific
app.get('/greeting/:name', (req, res) => {
    res.send('It`s been a month of Sundays since I saw you last ' + req.params.name + ' !')
  })


//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const tip = req.params.total * req.params.tipPercentage
    const actualTip = tip/100
    res.send(`Thank you for providing excellent service! You have earned a tip of $` + actualTip + `!`)
  })


//Magic 
app.get('/magic/:questionasked', (req, res) => {
    let magicArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const questionAsked = req.params.questionasked
    let answer = magicArr[Math.floor(Math.random() * magicArr.length)] 
    res.send(questionAsked + "? " + `<h1>${answer}</h1>`)
  })


app.listen(port, function () {
    console.log('Listening on port 3000');
  });