const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs') 
app.engine('one', (filePath, options, callback) => { 
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#facts#', '<h1>' + options.facts + '</h1>').replace('#content#','<div>'+ options.content + '</div>', '<div>'+ options.facts + '</div>'  )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'one')


app.get('/greeting', (req, res) => {
    res.send('Hello, stranger')
  })

app.get('/greeting/:name', (req, res) => {
    res.send('It`s been a month of Sundays since I saw you last ' + req.params.name + ' !')
  })


app.listen(port, function () {
    console.log('Listening on port 3000');
  });