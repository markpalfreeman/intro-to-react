const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
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

  handleSearchTerm (searchTerm) {
    this.setState({ searchTerm })
  },

  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
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
