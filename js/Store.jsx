const redux = require('redux')
const reactRedux = require('react-redux')

// Actions
const SET_SEARCH_TERM = 'setSearchTerm'

const initialState = {
  searchTerm: ''
}

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

const store = redux.createStore(rootReducer)

const mapStateToProps = (state) => ({
  // implicitly returns object
  searchTerm: state.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
  // implicitly returns object
  setSearchTerm (searchTerm) {
    dispatch({type: SET_SEARCH_TERM, value: searchTerm})
  }
})

// Creates special component to wrap our components to feed props to components
const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
