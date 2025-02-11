import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation'
import Header from './Header'
import { Colors } from '../../utils/colors'
import Block from '../ui/Block'
import Title from '../ui/Title'
import { Groups } from '../../utils/data'

export default function Group({route,  navigation }) {
    return (
        <>
            <Header />
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
                <FlatList data={Groups} renderItem={({ item }) => {
                    return <Block
                        img={require("../../assets/education.png")}
                        value={item.title}
                        title={item.group_name2}
                        block_style={{ height: 70, width: "calc(100% - 40% * 1vh)", marginTop: 10 }}
                        title_style={styles.BlockTitle2}
                        onPress={() => navigation.navigate('Level', { title: item.title, id: item.id })}
                    />
                }} keyExtractor={(item) => item.id} />
            </View>
            <TabNavigation name={route.name} />
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