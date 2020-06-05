import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Tools from './Tools'
import { Context } from '../store'

export default function HeadLine ({ id }) {
  const { store, dispatch } = useContext(Context)

  const { data } = store

  const {
    author,
    publishedAt,
    title,
    urlToImage
  } = data[id]

  const getDetail = () => {
    dispatch({
      type: 'select',
      selectedValue: id
    })
    window.scrollTo(0, 0)
  }

  return (
    <View>
      <Text
        style={styles.title}
        onClick={() => getDetail()}
      >{title}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.half}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{new Date(publishedAt).toDateString()}</Text>
        </View>
        <View style={styles.half}>
          <Tools id={id} />
        </View>
      </View>
      <Image
        style={styles.image}
        source={{ uri: urlToImage }}
        onClick={() => getDetail()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    paddingBottom: 5,
    marginTop: 15
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
    width: Dimensions.get('window').width
  },
  author: {
    fontSize: 15,
    width: Dimensions.get('window').width
  },
  date: {
    fontSize: 15,
    fontWeight: 'bold',
    width: Dimensions.get('window').width
  },
  half: {
    padding: 5,
    width: Dimensions.get('window').width / 2
  }
})
