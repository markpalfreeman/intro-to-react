const React = require('react')
const { Link, browserHistory } = require('react-router')
const { connector } = require('./Store')
const { func, string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },

  handleSearchTerm (event) {
    this.props.setSearchTerm(event.target.value)
  },

  goToSearch (event) {
    browserHistory.push('search')
    event.preventDefault()
  },

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
})

module.exports = connector(Landing)
