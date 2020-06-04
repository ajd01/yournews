import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default function Loading () {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  )
}
