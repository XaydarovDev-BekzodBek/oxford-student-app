import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { Groups } from '../../utils/data'
import TabNavigation from './TabNavigation'
import { Colors } from '../../utils/colors'

export default function Exams({ route }) {
    const groupId = 1 || route.params.groupId
    const exams = useMemo(() => {
        return Groups.find((item) => item.id === groupId).exams
    }, [groupId])
    return (
        <>
            {
                exams.length > 0 ? <ScrollView style={styles.container}>
                    <Text>Exams</Text>
                </ScrollView> : <View style={styles.theroLength}>
                    <Text>Sizda imtixonlar yo`q</Text>
                </View>
            }
            <TabNavigation name={route.name} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color2
    },
    theroLength: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    }
})