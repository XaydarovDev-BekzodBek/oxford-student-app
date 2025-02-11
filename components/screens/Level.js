import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import { Groups } from '../../utils/data'
import { Colors } from '../../utils/colors'
import TabNavigation from './TabNavigation'
import Block from '../ui/Block'
import Title from '../ui/Title'

export default function Level({ route, navigation }) {
  const levelId = 1 || route.params.id
  const level = useMemo(() => {
    return Groups.find((item) => item.id === levelId)
  }, [levelId])
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.Blocks}>
          <Block img={require('../../assets/play.png')} onPress={() => navigation.navigate('Course')} value={'Dars Reja'} value_style={{ margintTop: 30, fontSize: 25 }} img_style={{ width: 70, height: 70 }} block_style={{ paddingLeft: 0, paddingTop: 15, width: "47%", height: 150, flexDirection: 'column' }} />
          <Block img={require('../../assets/davomat.png')} onPress={() => navigation.navigate('Davomat')} value={'Davomat'} value_style={{ margintTop: 30, fontSize: 25 }} img_style={{ width: 70, height: 70 }} block_style={{ paddingLeft: 0, paddingTop: 15, width: "47%", height: 150, flexDirection: 'column' }} />
        </View>
        <View style={{ ...styles.Blocks, marginTop: 15 }}>
          <Block img={require('../../assets/money.png')} onPress={() => navigation.navigate('Paids', { groupId: level.id })} value={'To`lovlar'} value_style={{ margintTop: 30, fontSize: 25 }} img_style={{ width: 70, height: 70 }} block_style={{ paddingLeft: 0, paddingTop: 15, width: "47%", height: 150, flexDirection: 'column' }} />
          <Block img={require('../../assets/img1.png')} onPress={() => navigation.navigate('Exams',{groupId:level.id})} value={'Imtixonlar'} value_style={{ margintTop: 30, fontSize: 25 }} img_style={{ width: 70, height: 70 }} block_style={{ paddingLeft: 0, paddingTop: 15, width: "47%", height: 150, flexDirection: 'column' }} />
        </View>
        <Title text={'Group Information'} style={{ marginTop: 15 }} />
        <Block block_style={{ height: 80, marginTop: 15 }} img={require('../../assets/teacher.png')} title={'Teacher'} value={level.teacher} />
        <Block block_style={{ height: 80, marginTop: 15 }} img={require('../../assets/money.png')} title={'Guruh narxi'} value={level.price} />
        <Block block_style={{ height: 80, marginTop: 15 }} img={require('../../assets/timer.png')} title={'Guruh vaqti'} value={level.time} />
        <Block block_style={{ height: 80, marginTop: 15 }} img={require('../../assets/calendar.png')} title={'Hafta kunlar'} value={level.days} />
      </ScrollView>
      <TabNavigation name={'Home'} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.color2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  Blocks: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30
  }
})