import React from 'react'

export const Context = React.createContext()

export const InitialState = {
  data: [],
  selected: false,
  selectedValue: null,
  rates: [],
  favorited: []
}

export const Reducer = (state, action) => {
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
    case 'makeFavorite':
      if (state.favorited[action.id]) {
        delete state.favorited[action.id]
      } else {
        state.favorited[action.id] = true
      }
      return { ...state }
    case 'setRate':
      state.rates[action.id] = action.value
      return { ...state }
    default:
      return state
  }
}
