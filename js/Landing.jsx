const React = require('react')
const { Link, browserHistory } = require('react-router')
const { connector } = require('./Store')

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.goToForm = this.goToForm.bind(this)
  }

  handleSearchTerm (event) {
    this.props.setSearchTerm(event.target.value)
  }

  goToForm (event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>VideoViewer</h1>
        <form onSubmit={this.goToSearch}>
          <input className='search' type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTerm}/>
          <Link to='/search' className='browse-all'> or Browse All</Link>
        </form>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
