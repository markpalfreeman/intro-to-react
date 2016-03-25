const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const Layout = require('./Layout')
const Search = require('./Search')
const Landing = require('./Landing')
const Details = require('./Details')

// "Stateless component" = shed excess React Component baggage/methods
const App = () => (
  // Implicit 'return' without { }
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing}/>
      <Route path='/search' component={Search}/>
      <Route path='/details/:id' component={Details}/>
    </Route>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'))
