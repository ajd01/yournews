import React, { useContext, useEffect } from "react"
import { View, Text, Image, StyleSheet, Dimensions, Button } from "react-native"
import sources from "../utils/source"
import HeadLine from "./HeadLine"
import Tools from './Tools'
import { Context } from '../store'

export default function Details() {

    const { store, dispatch } = useContext(Context)

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
        <View>
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
            <Text style={styles.space}>
                {description}
            </Text>            
            <Image style={styles.image} source={urlToImage}/>
            <Text style={styles.space}>
                {content}
            </Text>
            <Button style={styles.space} 
                title='See more...'
                onPress={() => {
                    window.open(url, "_blank")
                }}></Button>
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
    },
    space: {
        paddingTop: 20,
    }
  })
