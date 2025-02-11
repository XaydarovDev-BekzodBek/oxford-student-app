import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TabNavigation from './TabNavigation'
import { useUser } from '../../store/useSelector'

export default function Profile({ route }) {
  const user = useUser()
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.Profile}>
          <Image source={require('../../assets/cat.jpg')} style={styles.profileImg} />
          <View>
            <Text style={styles.ProfileName}>{user.surname[0].toUpperCase() + user.surname.slice(1, user.length)} {user.name[0].toUpperCase() + user.name.slice(1, user.length)}</Text>
            <Text>{user.phone}</Text>
          </View>
        </View>
      </SafeAreaView>
      <TabNavigation name={route.name} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  Profile: {
    width: 'full',
    alignItems: 'start',
    flexDirection: 'row',
    gap: 20
  },
  ProfileName: {
    fontSize: 25,
    fontWeight: 700
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: '50%'
  }
})