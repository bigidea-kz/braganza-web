import { createContext, useContext, useState } from 'react'

const StateContext = createContext(null)

export function StateProvider({ children }) {
  const [introAnimationStatus, setIntroAnimationStatus] = useState(false)

  const value = {
    introAnimationStatus,
    setIntroAnimationStatus
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

export function useStateContext() {
  return useContext(StateContext)
}