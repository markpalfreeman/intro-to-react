const React = require('react')
const { Router, browserHistory } = require('react-router')
const { Provider } = require('react-redux')
const Layout = require('./Layout')
const { store } = require('./Store')

// Make Node 'ensure' calls synchronous
if (module && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')  // shim for node.js
  }
}

// Only call routes *when we need them* (asychronously)
const routeConfig = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routeConfig}/>
      </Provider>
    )
  }
})

App.Routes = routeConfig
App.History = browserHistory // share history

module.exports = App
