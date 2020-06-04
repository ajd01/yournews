import React from 'react'

export const Context = React.createContext()

export const InitialState = {
  data: [],
  selected: false,
  selectedValue: null
}

export const Reducer = (state, action) => {
  console.log('dispatch')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'reset':
      return InitialState
    case 'setData':
      return { ...state, data: action.data }
    case 'select':
      return {
        ...state,
        selected: true,
        selectedValue: action.selectedValue
      }
    case 'unselect':
      return {
        ...state,
        selected: false,
        selectedValue: null
      }
    default:
      return state
  }
}
