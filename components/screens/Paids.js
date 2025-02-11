import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from "../../utils/colors"
import TabNavigation from './TabNavigation'
import { useMemo } from 'react'
import { Groups } from '../../utils/data'
import Block from '../ui/Block'
import Title from '../ui/Title'

export default function Paids({ route }) {
    const groupId = 1 || route.params.groupId
    const paids = useMemo(() => {
        return Groups.find((item) => item.id === groupId).paids
    }, [groupId])

    console.log(paids);


    return (
        <>
            <ScrollView style={styles.container}>
                <Title text={'To`lov tarixi'} />
                <FlatList data={paids} renderItem={({ item }) => {
                    return <Block block_style={{ marginTop: 15, height: 70 }} value2={item.date} img={require('../../assets/money.png')} value={item.price} title={item.title

                    } />
                }} keyExtractor={({ _, index }) => index} />
            </ScrollView>
            <TabNavigation name={route.name} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color2,
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
    }
})