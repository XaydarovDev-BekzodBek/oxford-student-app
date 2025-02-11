import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextField from '../ui/TextField'
import { Colors } from '../../utils/colors'
import Button from '../ui/Button'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/user'

export default function Login() {
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const dispatch = useDispatch()

    const handleLogIn = () => {
        if (password === "" || (phone === "" || phone.length != 9)) {
            Toast.show({ type: "error", text1: "Error", text2: "Log in qilish uchun ma`lumotlar kiriting" })
        } else {
           if(password === "2778" && phone === "+998990072778"){
            dispatch(setUser({ password, phone, name: "bekzod", surname: "xaydarov" }))
            Toast.show({ type: "success", text1: "Success" })
           }
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.welcome_text}>Welcome</Text>
            <Text style={styles.text1}>Log in to your account</Text>
            <TextField ComponentStart={<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}> <Image source={require("../../assets/uzb-icon.png")} style={{ width: 25, height: 23, borderRadius: 5 }} /> <Text>+998</Text></View>} placeholder={'(--) --- -- --'} maxLength={9} state={phone} setState={setPhone} Style={{ marginTop: 15, gap: 5 }} />
            <TextField placeholder={'password'} state={password} setState={setPassword} IssecureTextEntry={true} Style={{ marginTop: 15, gap: 5 }} />
            <Text style={styles.forgetPassword_text}>Forget Password</Text>
            <Text style={styles.forgetPassword_intro_text}>You will receive an SMS verification that may apply message and data rates</Text>
            <Button text={"Log in"} onClick={handleLogIn} container_style={{ marginTop: "80%" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    welcome_text: {
        fontSize: 40,
        fontWeight: 640
    },
    text1: {
        fontWeight: 400
    },
    forgetPassword_text: {
        marginTop: 15,
        color: Colors.blue,
        fontWeight: 400
    },
    forgetPassword_intro_text: {
        color: "gray",
        fontSize: 13
    }
})