import { StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/colors'
import Entypo from '@expo/vector-icons/Entypo';

export default function TabNavigation({name}) {
    const data = ['Profile']
    if(data.includes(name)){
        return null
    }
    return (
        <View style={styles.container}>
            <TouchableHighlight>
            <Entypo name="home" size={24} color="white" />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        left: 15,
        width: "95%",
        height: 65,
        backgroundColor: Colors.blue,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft:20,
        paddingRight:20,
        borderRadius: 30
    }
})