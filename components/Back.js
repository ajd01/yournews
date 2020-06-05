import React, { useContext } from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native'
import Icon from './Icon'
import { Context } from '../store'

export default function Back () {
  const { dispatch } = useContext(Context)

  return (
    <TouchableOpacity
      style={styles.Back} onPress={() => {
        dispatch({
          type: 'unselect'
        })
      }}
    >
      <Icon name='arrow-left' type='font-awesome' color='#f50' />
      <Text>Back</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Back: {
    textAlign: 'left',
    width: Dimensions.get('window').width,
    position: 'relative',
    flexDirection: 'row',
    margin: 20,
    zIndex: 99
  }
})
