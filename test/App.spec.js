/* eslint-env mocha */

const { expect } = require('chai')
const { shallow, mount } = require('enzyme') // Only test 'shallow' component (not into nested components)
const React = require('react')

const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { store, rootReducer } = require('../js/Store')
const { shows } = require('../public/data')

// Search component test
describe('<Search /> ', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>VideoViewer</h1>)).to.be.true
  })

  it('should render as many shows as their are data for', () => {
    const wrapper = shallow(<Search />)
    // Check whether our rendered cards count matches total given in data
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state (search term)', () => {
    // Use Enzyme 'mount' for events (not accessible with 'shallow')
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

// Redux Store test
describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '' })
  })
  // Give the reducer an initial searchTerm string, then run it through the reducer (change term)
  it('should handle setSearchTerm actions', () => {
    const state = rootReducer(
      { searchTerm: 'some random string' },
      { type: 'setSearchTerm', value: 'correct string' }
    )
    expect(state).to.deep.equal({ searchTerm: 'correct string' })
  })
})
