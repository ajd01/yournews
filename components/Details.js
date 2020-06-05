import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native'
import Tools from './Tools'
import { Context } from '../store'

export default function Details () {
  const { store } = useContext(Context)

  const { selectedValue, data } = store

  const {
    author,
    publishedAt,
    title,
    urlToImage,
    description,
    content,
    url
  } = data[selectedValue]

  return (
    <View style={styles.detail}>
      <Text style={styles.title}>{title}</Text><br />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.half}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{new Date(publishedAt).toDateString()}</Text>
        </View>
        <View style={styles.half}>
          <Tools id={selectedValue} />
        </View>
      </View>
      <Text style={styles.space}>
        {description}
      </Text>
      <Image style={styles.image} source={{ uri: urlToImage }} />
      <Text style={styles.space}>
        {content}
      </Text>
      <Text style={styles.button}>
        <Button
          title='See more'
          onPress={() => {
            window.open(url, '_blank')
          }}
        />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    paddingBottom: 5,
    paddingTop: 20
  },
  title: {
    paddingTop: 10,
    fontSize: 25,
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
    width: Dimensions.get('window').width / 2
  },
  space: {
    paddingTop: 20,
    paddingBottom: 20
  },
  button: {
    padding: 20,
    textAlign: 'center'
  },
  detail: {
    padding: 5
  }
})
