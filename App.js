import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Overview from './components/Overview'
import Detail from './components/Details'
import Back from './components/Back'
import {
  Context,
  InitialState,
  Reducer
} from './store'

export default function App () {
  const [store, dispatch] = useReducer(Reducer, InitialState)

  const { selected } = store

  return (
    <Context.Provider value={{ store, dispatch }}>
      <Text style={styles.Header}>Your News</Text>
      {selected
        ? <View>
          <Back />
          <Detail />
          </View>
        : <Overview />}
    </Context.Provider>
  )
}

const styles = StyleSheet.create({
  Header: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 45,
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    width: Dimensions.get('window').width,
    zIndex: 98
  }
})
