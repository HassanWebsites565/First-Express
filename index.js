require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const apiData = [
    {
      "userId": 1,
      "it": 1,
      "title": "are or do repels provide blacked out except option criticizes",
      "body": "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect"
    },
    {
      "userId": 1,
      "it": 2,
      "title": "who is being",
      "body": "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
    },
    {
      "userId": 1,
      "it": 3,
      "title": "she repels troubles as if she were training, whoever she is",
      "body": "and just but by what right\nthe pleasure of every one who chooses to be blinded, or to the\npleasure of pains or accusers, who is spared"
    },
    {
      "userId": 1,
      "it": 4,
      "title": "and he is blinded",
      "body": "get any pleasure by rejecting it often\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
    }
]    

app.get('/apiData', (req, res) => {
    
    res.json(apiData)

}) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('mubashar.com')
} )

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Chai aur Code</h1>')
})



app.get('/youtube', (req, res) => {
    res.send(" <h2> This is Youtube server </h2> ")
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})