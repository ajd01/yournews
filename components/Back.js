import React, { useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Icon from './Icon'
import { Context } from '../store'

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

const styles = StyleSheet.create({
  Back: {
    textAlign: 'left',
    width: Dimensions.get('window').width,
    position: 'relative',
    flexDirection: 'row',
    margin: '20px',
    zIndex: 99
  }
})
