const React = require('react')
const { shows } = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = () => (
  <div className='container'>
    <div className='shows'>

      {shows.map((show) => (
        <ShowCard show={show} key={show.imdbID}/>
      ))}

    </div>
  </div>
)

module.exports = Search
