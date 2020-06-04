import React from "react"

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
            return InitialState;
        case 'setData':
            return { data: action.data };
        case 'select':
            return { 
                selected: true,
                selectedValue: state.selectedValue
            };
        case 'unselect':
            return { 
                selected: false,
                selectedValue: null
            };
        default:
            return state
    }
}