import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/colors'

export default function Block({ img, value, title, block_style, img_style, value_style, title_style, onPress }) {
    return (
        <View style={{ ...styles.Block, ...block_style }} onClick={onPress}>
            <Image source={img} style={{ ...styles.BlockImage, ...img_style }} />
            <View>
                <Text style={{ ...styles.BlockValue, ...value_style }}>{value}</Text>
                <Text style={{ ...styles.BlockTitle, ...title_style }}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Block: {
        backgroundColor: "white",
        borderColor: "gray",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        gap: 10
    },
    BlockImage: {
        width: 40,
        height: 40
    },
    BlockTitle: {
        color: "gray",
        fontSize: 13,
        width: "auto"
    },
    BlockValue: {
        color: Colors.darkBlue,
        fontSize: 18,
        fontWeight: 600
    },
})