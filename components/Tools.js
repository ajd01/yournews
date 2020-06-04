import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    favorite: {
        textAlign: 'left',
        width: Dimensions.get('window').width/4,
        flexDirection: "row"
    },
    rate: {
        textAlign: 'rigth',
        width: Dimensions.get('window').width/4,
        flexDirection: "row"
    }
  });

export default function Tools() {
    return (
        <View style={{ flexDirection:"row" }}>
            <View style={styles.favorite}>
                <Icon name='heart' type='font-awesome' color='#f50'/>
                <Icon name='heart-o' type='font-awesome' color='#f50'/>
            </View>
            <View style={styles.rate}>
                <Icon name='star' type='font-awesome' color='#f50'/>
                <Icon name='star-o' type='font-awesome' color='#f50'/>
                <Icon name='star-o' type='font-awesome' color='#f50'/>
            </View>
        </View>
    )
}