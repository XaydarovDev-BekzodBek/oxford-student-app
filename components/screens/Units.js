import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import TabNavigation from './TabNavigation'
import { CoursesData } from '../../utils/data'
import Block from '../ui/Block'
import Title from '../ui/Title'

export default function Units({ route }) {
    // const {unitId} = route.params
    const unitId = 1
    const data = useMemo(() => {
        return CoursesData.find((item) => item.id === unitId)?.lessons
    }, [unitId])

    return (
        <>
            <ScrollView style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20
            }}>
                <Title text={"Units"}  />
                <FlatList numColumns={2} data={data} renderItem={({ item }) => {
                    return <Block block_style={styles.block} img={require("../../assets/check.png")} value={item.title} title={`${item.lessons.length} lessons`} />
                }} keyExtractor={(item) => item.id} columnWrapperStyle={{ justifyContent: 'space-between' }} />
            </ScrollView>
            <TabNavigation name={'Course'} />
        </>
    )
}

const styles = StyleSheet.create({
    block: {
        width: "40%",
        height: 150,
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0
    }
})