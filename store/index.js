import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const initialState = { distance: 0 }

function reducer (state, action) {
  switch (action.type) {
    case 'change':
      return { distance: action.distance }
    default:
      throw new Error()
  }
}

const Context = createContext(undefined, undefined)

function useStore () {
  return useContext(Context)
}

function StoreProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.any
}
export { useStore, StoreProvider }
