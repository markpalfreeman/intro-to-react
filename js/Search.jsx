const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { connector } = require('./Store')
const { object, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    route: object,
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
          {this.props.route.shows
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
