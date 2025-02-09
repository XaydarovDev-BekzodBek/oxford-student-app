import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'

export default function Title({ style, text }) {
    return (
        <Text style={{ ...styles.title_text, ...style }}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title_text: {
        color: Colors.darkBlue,
        fontSize: 17,
        fontWeight: 600
    }
})