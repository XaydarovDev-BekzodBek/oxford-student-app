import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from '../../utils/colors'

const TextField = ({ placeholder, Style, state, setState, IssecureTextEntry, maxLength, ComponentStart, ComponentEnd }) => {
    const [focus, setFocus] = useState(false)
    return (
        <View style={{ ...styles.textField_container, borderColor: focus ? Colors.blue : "gray", ...Style }} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
            {ComponentStart}
            <TextInput placeholder={placeholder} placeholderTextColor={'gray'} style={{ ...styles.textfield, outline: "none" }}  value={state} onChange={(e) => setState(e.target.value)} secureTextEntry={IssecureTextEntry} maxLength={maxLength} />
            {ComponentEnd}
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    textField_container: {
        width: "full",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 7,
        height: 40,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection:"row",
        alignItems:"center"
    },
    textfield: {
        width: '50%',
        height: "100%"
    }
})