const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    route: object
  },

  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  handleSearchTerm (event) {
    this.setState({searchTerm: event.target.value})
  },

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>VideoViewer</h1>
          <input className='search-input' type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTerm}/>
        </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => {
              return (
                `${show.title} ${show.description}`
                .toLowerCase()
                .indexOf(this.state.searchTerm.toLowerCase()) >= 0
              )
            })
            .map((show) => (
              <ShowCard {...show} key={show.imdbID}/>
            ))
          }
        </div>
      </div>
    )
  }
})

module.exports = Search
