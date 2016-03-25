const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { connector } = require('./Store')
const { object, string, arrayOf } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },

  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  render () {
    return (
      <div className='container'>
        <Header showSearch/>
        <div className='shows'>
          {this.props.shows
            .filter((show) => {
              return (
                `${show.title} ${show.description}`
                .toLowerCase()
                .indexOf(this.props.searchTerm.toLowerCase()) >= 0
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

module.exports = connector(Search)
