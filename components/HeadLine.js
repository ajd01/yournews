import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Tools from './Tools'
import { Context } from '../store'

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    paddingBottom: 5,
    marginTop: 15
  },
  title: {
    paddingTop: 30,
    fontSize: '1em',
    fontWeight: 'bold',
    width: Dimensions.get('window').width
  },
  author: {
    fontSize: '.5em',
    width: Dimensions.get('window').width
  },
  date: {
    fontSize: '.5em',
    fontWeight: 'bold',
    width: Dimensions.get('window').width
  },
  half: {
    width: Dimensions.get('window').width / 2
  }
})

export default function HeadLine ({ article, id }) {
  const { dispatch } = useContext(Context)

  const {
    author,
    publishedAt,
    title,
    urlToImage
  } = article

  return (
    <View onClick={() => {
      dispatch({
        type: 'select',
        selectedValue: id
      })
    }}
    >
      <Text style={styles.title}>{title}</Text><br />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.half}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{new Date(publishedAt).toDateString()}</Text>
        </View>
        <View style={styles.half}>
          <Tools />
        </View>
      </View>
      <Image
        style={styles.image}
        source={urlToImage}
      />
    </View>
  )
}
