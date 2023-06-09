const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')))

const hotel = require('../server/routes/hotel')
const hotelDetail = require('../server/routes/hotelDetail')
const flight = require('../server/routes/flight')
const deal = require('../server/routes/deal')
const landing = require('../server/routes/landing')
const profile = require('../server/routes/profile')
const checkout = require('../server/routes/checkout')

app.use(hotel.router)
app.use(hotelDetail.router)
app.use(flight.router)
app.use(deal.router)
app.use(landing.router)
app.use(profile.router)
app.use(checkout.router)

app.listen(3000, () => {
    console.log('Start server at http://localhost:3000')
})