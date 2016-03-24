var React          = require('react')
var ReactDOM       = require('react-dom')
var MyTitle        = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)
var div            = React.DOM.div
var elem           = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    elem(MyTitle, {title: 'Props are the best!', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
