import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TabNavigation from './TabNavigation'
import { Colors } from '../../utils/colors'
import Title from '../ui/Title'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Months } from '../../utils/data'

export default function Davomat({ route }) {
    const date = new Date()

    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [days,setDays] = useState(0)

    useEffect(() => {
        setMonth(date.getMonth())
        setYear(date.getFullYear())
    }, [])

    const handlePrev = () => {
        console.log(month);
        if (month > 0) {
            setMonth(month - 1)
        } else {
            setMonth(11)
            setYear(year - 1)
        }

    }

    const handleNext = () => {
        if (month >= 11) {
            setMonth(0)
            setYear(year + 1)
        } else {
            setMonth(month + 1)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Title text={'Davoat'} />
                <View style={styles.dataPicker}>
                    <View style={styles.dataPickerHeader}>
                        <TouchableHighlight onPress={handlePrev}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableHighlight>
                        <View>
                            <Text>{Months[month]} {year}</Text>
                        </View>
                        <TouchableHighlight onPress={handleNext}>
                            <AntDesign name="arrowright" size={24} color="black" />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            <TabNavigation name={route.name} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color2,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    dataPicker: {
        width: 'full',
        height: 300,
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 15,
        padding: 15
    },
    dataPickerHeader: {
        width: 'full',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
})