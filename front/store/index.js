import { createContext, useReducer } from 'react'
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

const StateContext = createContext()
const DispatchContext = createContext()

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.any
}
export { StateContext, DispatchContext, StoreProvider }
