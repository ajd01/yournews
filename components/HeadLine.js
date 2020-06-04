import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default function HeadLine({ article }) {

    const { 
        author, 
        publishedAt, 
        title, 
        urlToImage 
    } = article

    const viewArticle = () => {
        
    }

    return (
        <div onClick={viewArticle}>
            <Text>{title}</Text>
            <Text>{author}</Text>
            <Text>{publishedAt}</Text>
            <Image
                style={styles.tinyLogo}
                source={urlToImage}
            />
        </div>
    )
}