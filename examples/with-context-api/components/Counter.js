import { useReducer, useContext, createContext, useState } from 'react'

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();
const customCounterContext = useContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    case 'INCREASE_BY':
      return state + action.payload
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [customCounter, setCustomCounter] = useState(0);
  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={{ state, title: 'allbirds' }}>
        <customCounterContext.Provider value={{ customCounter, setCustomCounter }}>
          {children}
        </customCounterContext.Provider>
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  )
}

export const useCount = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)
