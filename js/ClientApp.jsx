const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Layout = require('./Layout')
const Search = require('./Search')
const Landing = require('./Landing')
const Details = require('./Details')
const { shows } = require('../public/data')

const App = React.createClass({
  render () {
    return (
      // Implicit 'return' without { }
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing}/>
          <Route path='/search' component={Search} shows={shows}/>
          <Route path='/details/:id' component={Details}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('app'))
