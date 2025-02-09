import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Login from '../components/screens/Login'
import { useUser } from '../store/useSelector'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../components/screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Course from '../components/screens/Course'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    const user = useUser()
    return (
        <SafeAreaView style={styles.safeArea}>
            {
                user ? <>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                            <Stack.Screen name='Course' component={Course} options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </> : <Login />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position:"relative"
    }
})