const React = require('react')
const ReactDOM = require('react-dom')
const { Router, browserHistory } = require('react-router')
const { Provider } = require('react-redux')

const Layout = require('./Layout')
const Search = require('./Search')
const Landing = require('./Landing')
const Details = require('./Details')
const { shows } = require('../public/data')
const { store } = require('./Store')

const App = React.createClass({
  // 'nextState' (properties) and 'replace' from Router
  assignShow (nextState, replace) {
    // Get an array of shows matching route/show ID (hoping to match 1)
    const showArray = shows.filter((show) => (
      show.imdbID === nextState.params.id
    ))
// Make Node 'ensure' calls synchronous
if (module && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')  // shim for node.js
  }
}

    // Redirect to home page if no show is found
    if (showArray.length < 1) {
      // 'replace()' is a method on ReactRouter
      return replace('/')
    }

    // Return new object for nextState with the show found
    Object.assign(nextState.params, showArray[0])
    return nextState
  },

  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing}/>
            <Route path='/search' component={Search} shows={shows}/>
            <Route path='/details/:id' component={Details} onEnter={this.assignShow}/>
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('app'))
App.History = browserHistory // share history
