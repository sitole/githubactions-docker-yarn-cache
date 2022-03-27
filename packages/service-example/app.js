const express = require('express')
const CurrencyFormatter = require("@sitole/utils/src/formatters/CurrencyFormatter");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/currency-formatter', (req, res) => {
  const amount = req.query.amount
  const currency = req.query.currency

  res.send(
    'Formatted value: ' + CurrencyFormatter('cs', amount, currency)
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
