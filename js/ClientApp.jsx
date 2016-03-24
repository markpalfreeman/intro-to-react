const React          = require('react')
const ReactDOM       = require('react-dom')
const MyTitle        = require('./MyTitle')

// "Stateless component" = shed excess React Component baggage/methods
const MyFirstComponent = () => (
  // Implicit 'return' w/o { }
  <div>
    <MyTitle title="Props are great!" color="rebeccapurple"/>
    <MyTitle title="Use props everywhere!" color="mediumaquamarine"/>
    <MyTitle title="OMGLOLWTFBBQ" color="papayawhip"/>
  </div>
)

ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))
