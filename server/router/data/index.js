let { Router } = require('express');
module.exports = new Router()
            .get('/data/home',require('./home'))
            .get('/data/list',require('./list'))
            .get('/data/detail',require('./detail'))
            .get('/data/search',require('./search'))
            .get('/data/order',require('./order'))