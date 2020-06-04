import React, { useReducer } from "react"
import { View, Text } from "react-native"
import Overview from "./components/Overview"
import { 
  Context, 
  InitialState, 
  Reducer 
} from './store'

export default function App() {
  const [store, dispatch] = useReducer(Reducer, InitialState)

  return (
    <Context.Provider value={{ store, dispatch }}>
      <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Overview/>
      </View>
    </Context.Provider>
    
  );
}
