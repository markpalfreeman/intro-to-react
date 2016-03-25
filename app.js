// EXPRESS SERVER

require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const match = require('react-router').match
const RouterContext = require('react-router').RouterContext
const Provider = require('react-redux').Provider
const store = require('./js/Store.jsx').store
const _ = require('lodash')
const fs = require('fs')
const port = 8080
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const ClientApp = require('./js/clientApp.jsx')
const Routes = ClientApp.Routes

const app = express()

app.use('/public', express.static('./public'))

app.use((req, res) => {
  match({routes: Routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store}, React.createElement(RouterContext, renderProps))
      )
      res.status(200).send(template({body}))
    } else {
      res.status(404).send('Not found')
    }
  })
})

console.log('listening on port: ' + port)
app.listen(port)
