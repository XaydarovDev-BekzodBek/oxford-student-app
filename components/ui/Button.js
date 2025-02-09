import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/colors'

export default function Button({ text, container_style, text_style, onClick }) {
    return (
        <TouchableHighlight style={{ ...styles.btn_container, ...container_style }} onPress={onClick}>
            <Text style={{ ...styles.btn_text, text_style }}>{text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn_container: {
        width: "full",
        height: 40,
        backgroundColor: Colors.blue,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:30
    },
    btn_text: {
        color: "white",
        fontSize: 15
    }
})