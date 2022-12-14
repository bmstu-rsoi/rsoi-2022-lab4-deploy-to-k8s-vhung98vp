const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const ROUTES = require('./routes');


const app = express();
app.use(morgan('combined'));

app.get('/manage/health', function(req, res) {
    return res.status(200).json({});
})

ROUTES.forEach(item => {
    app.use(item.url, createProxyMiddleware(item.options))
})  

module.exports = app;