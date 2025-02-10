import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation'
import Header from './Header'
import { Colors } from '../../utils/colors'
import Block from '../ui/Block'
import Title from '../ui/Title'

export default function Group({ route }) {
    return (
        <>
            <Header name={route.name} />
            <View style={styles.container}>
                <View style={styles.Blocks}>
                    <Block img={require("../../assets/star.png")} block_style={{
                        width: "47%",
                        height: 70,
                    }} value={'9'} title={'Average Score'} />
                    <Block img={require("../../assets/davomat.png")} block_style={{
                        width: "47%",
                        height: 70,
                    }} value={'4/4'} title={'Davomat'} />
                </View>
                <Title text={'Aktiv Guruhlar'} style={{ marginTop: 20 }} />
                <Block block_style={{ marginTop: 15, height: 70 }} img_style={{width:60}} img={require('../../assets/education.png')} value={"English (Elementary)"} title={'English (kids) Elementary Juft 14-16 Roziya-Group'} />
            </View>
            <TabNavigation name={"Course"} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color2,
        paddingTop: 80,
        paddingLeft: 15,
        paddingRight: 15,
    },
    Blocks: {
        width: "full",
        flexDirection: "row",
        justifyContent: "space-between",
    },
})