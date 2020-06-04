import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Tools from './Tools'
import { Context } from '../store'

export default function HeadLine ({ article, id }) {
  const { dispatch } = useContext(Context)

  const {
    author,
    publishedAt,
    title,
    urlToImage
  } = article

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
        source={urlToImage}
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
