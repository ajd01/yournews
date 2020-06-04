import React, { useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { Context } from '../store'

export default function Tools ({ id }) {
  const { store, dispatch } = useContext(Context)

  const { rates, favorited } = store

  const rate = rates[id] || 0
  const favorite = favorited[id] || false

  const dispatchRate = (value) => {
    dispatch({
      type: 'setRate',
      value: value,
      id: id
    })
  }

  const dispatchFavorite = () => {
    dispatch({
      type: 'makeFavorite',
      id: id
    })
  }

  const starO = (value) => <Icon
    name='star-o'
    type='font-awesome'
    color='#f50'
    onClick={() => dispatchRate(value)}
  />
  const star = (value) => <Icon
    name='star'
    type='font-awesome'
    color='#f50'
    onClick={() => dispatchRate(value)}
  />

  const rateScore = () => {
    let elements = [false, false, false]
    elements = elements.map((e, i) => i < rate)
    return (
      <View style={styles.rate}>
        {elements.map((a, i) => a ? star(i + 1) : starO(i + 1))}
      </View>
    )
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.favorite}>
        {favorite
          ? <Icon
            name='heart'
            type='font-awesome'
            color='#f50'
            onClick={() => dispatchFavorite()}
            />
          : <Icon
            name='heart-o'
            type='font-awesome'
            color='#f50'
            onClick={() => dispatchFavorite()}
          />}

      </View>
      {rateScore()}
    </View>
  )
}

const styles = StyleSheet.create({
  favorite: {
    width: Dimensions.get('window').width / 4,
    flexDirection: 'row'
  },
  rate: {
    width: Dimensions.get('window').width / 4,
    flexDirection: 'row'
  }
})
