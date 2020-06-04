import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Overview from './Overview'
import Detail from './Details'
import Back from './Back'
import { Context } from '../store'

export default function App () {
  const { store } = useContext(Context)

  const { selected } = store

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#c4e248'
      }}
    >
      <Text style={styles.Header}>Your News</Text>
      {selected
        ? <Back />
        : <View />}
      <View style={styles.Content}>
        {selected
          ? <Detail />
          : <Overview />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 3,
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    width: Dimensions.get('window').width,
    position: 'relative',
    zIndex: 98
  },
  Content: {
    marginTop: 60
  }
})
