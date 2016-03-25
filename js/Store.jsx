const redux = require('redux')
const reactRedux = require('react-redux')
const {shows} = require('../public/data')

// Actions
const SET_SEARCH_TERM = 'setSearchTerm'

const initialState = {
  searchTerm: '',
  shows
}

// Main Dispatch function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  // Overwrite searchTerm from 'state' and return newState object
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

// For Production, ONLY rootReducer is needed (the rest is middleware for Redux DevTools)
const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  shows: state.shows
})

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm (searchTerm) {
    dispatch({type: SET_SEARCH_TERM, value: searchTerm})
  }
})

// Creates special component to wrap our components to feed props to components
const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
