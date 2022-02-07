require('dotenv').config()
require('../database/database')
const express = require('express')
const app = express()
const purchases = require('../routes/purchases')
const mercadopago = require("mercadopago");
const port = process.env.PORT

const mercadoPagoPublicKey = process.env.MERCADO_PAGO_SAMPLE_PUBLIC_KEY;

const mercadoPagoAccessToken = process.env.MERCADO_PAGO_SAMPLE_ACCESS_TOKEN;

mercadopago.configurations.setAccessToken(mercadoPagoAccessToken);


app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, accesstoken');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

app.use('/', purchases)

app.listen(port, () => console.log(`listening to the port : ${port}`))