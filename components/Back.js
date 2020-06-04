import React, { useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { Context } from '../store'

const styles = StyleSheet.create({
  Back: {
    textAlign: 'left',
    width: Dimensions.get('window').width,
    position: 'fixed',
    flexDirection: 'row',
    margin: '20px',
    zIndex: 99
  }
})

export default function Back () {
  const { dispatch } = useContext(Context)

  return (
    <View
      style={styles.Back} onClick={() => {
        dispatch({
          type: 'unselect'
        })
      }}
    >
      <Icon name='arrow-left' type='font-awesome' color='#f50' />
    </View>
  )
}
