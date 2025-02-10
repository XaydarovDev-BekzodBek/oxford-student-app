import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Login from '../components/screens/Login'
import { useUser } from '../store/useSelector'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../components/screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Course from '../components/screens/Course'
import Units from '../components/screens/Units'
import { Colors } from '../utils/colors'
import Group from '../components/screens/Group'
import Level from '../components/screens/Level'
import Davomat from '../components/screens/Davomat'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    const user = useUser()
    return (
        <SafeAreaView style={styles.safeArea}>
            {
                user ? <>
                    <NavigationContainer>
                        <Stack.Navigator>
                            {/* <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                            <Stack.Screen name='Course' component={Course} options={{ headerShown: false }} />
                            <Stack.Screen name='Units' component={Units} options={({ route }) => ({
                                headerTitleAlign: 'center', headerStyle: {
                                    backgroundColor: Colors.blue,
                                },
                                headerTintColor: 'white',
                                title: route.params.title
                            })} />
                            <Stack.Screen name='Group' component={Group} options={{ headerShown: false }} />
                            <Stack.Screen name='Level' component={Level} options={({ route }) => ({
                                headerTitleAlign: 'center', headerStyle: {
                                    backgroundColor: Colors.blue,
                                },
                                headerTintColor: 'white',
                                title: "English" || route.params.title
                            })} /> */}
                            <Stack.Screen name='Davomat' component={Davomat} options={({ route }) => ({
                                headerTitleAlign: 'center', headerStyle: {
                                    backgroundColor: Colors.blue,
                                },
                                headerTintColor: 'white',
                                title: "Davomat"
                            })} />
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
        position: "relative"
    }
})