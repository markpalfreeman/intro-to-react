const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./Store')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },

  handleSearchTerm (event) {
    this.props.setSearchTerm(event.target.value)
  },

  render () {
    let headerAction

    // Conditionally show search bar or Back depending on 'showSearch' flag
    if (this.props.showSearch) {
      headerAction = (
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={this.props.searchTerm}
          onChange={this.handleSearchTerm}
        />
      )
    } else {
      headerAction = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }

    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>VideoViewer</Link>
        </h1>
        {headerAction}
      </header>
    )
  }
})

module.exports = connector(Header)
