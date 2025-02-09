import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Colors } from '../../utils/colors'
import { useUser } from '../../store/useSelector'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header({ name }) {
    const user = useUser()

    const data = ['Profile']
    if (data.includes(name)) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={require("../../assets/cat.jpg")} style={styles.cat_img} />
                <Text style={styles.name_text}>{user?.surname[0].toUpperCase() + user?.surname.slice(1, user?.surname.length)} {user?.name[0].toUpperCase() + user?.name.slice(1, user?.name.length)}</Text>
            </View>
            <TouchableHighlight>
                <View>
                    <Ionicons name="notifications" size={24} color="white" />
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: Colors.blue,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        zIndex: 100
    },
    cat_img: {
        width: 40,
        height: 40,
        borderRadius: "50%"
    },
    name_text: {
        color: "white",
        fontSize: 16
    }
})