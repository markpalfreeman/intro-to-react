const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory } = require('react-router')
const Search = require('./Search')
const Landing = require('./Landing')

// "Stateless component" = shed excess React Component baggage/methods
const App = () => (
  // Implicit 'return' without { }
  <Router history={hashHistory}>
    <Route path='/' component={Landing}/>
    <Route path='/search' component={Search}/>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'))
