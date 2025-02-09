import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import TabNavigation from './TabNavigation'
import Header from './Header'
import { Colors } from '../../utils/colors'
import Title from '../ui/Title'
import Block from '../ui/Block'

export default function Home({ route }) {

  return (
    <>
      <Header name={route.name} />
      <ScrollView style={styles.container}>
        <View style={styles.Blocks}>
          <Block img={require("../../assets/crystal.png")} block_style={{
            width: "47%",
            height: 70,
          }} value={"15"} title={"crystal"} />
          <Block img={require("../../assets/money.png")} block_style={{
            width: "47%",
            height: 70,
          }} value={"0"} title={"so`m"} />
        </View>

        <View style={{ ...styles.Blocks, marginTop: 15 }}>
          <Block img={require("../../assets/coin.png")} block_style={{
            width: "47%",
            height: 70,
          }} value={"110"} title={"coin"} />
          <Block img={require("../../assets/ranking.png")} block_style={{
            width: "47%",
            height: 70,
          }} value={"#2"} title={"Group Ranking"} />
        </View>
        <Title text={"Groups"} style={{ marginTop: 30 }} />
        <Block img={require("../../assets/education.png")} value={"English (Elementary)"} title={"14:00-16:00"} block_style={{ height: 70, width: "60%", marginTop: 10 }} title_style={styles.BlockTitle2} />
        <Title text={"Games"} style={{ marginTop: 30 }} />
        <View style={styles.Blocks}>
          <Block img={require("../../assets/gaming.png")} />
        </View>
      </ScrollView>
      <TabNavigation name={route.name} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color2,
    paddingTop: 80,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Blocks: {
    width: "full",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  Block: {
    backgroundColor: "white",
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 10
  },
  BlockImage: {
    width: 40,
    height: 40
  },
  BlockTitle: {
    color: "gray",
    fontSize: 13
  },
  BlockValue: {
    color: Colors.darkBlue,
    fontSize: 18,
    fontWeight: 600
  },
  BlockTitle2: {
    color: Colors.green,
    fontSize: 11
  }
})