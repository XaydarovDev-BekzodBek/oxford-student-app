import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./TabNavigation";
import Header from "./Header";
import { Colors } from "../../utils/colors";
import Title from "../ui/Title";
import Block from "../ui/Block";

export default function Course({ route }) {
  return (
    <>
      <Header name={route.name} />
      <View style={styles.container}>
        <Title text={"Courses"} />
        <Block img={require("../../assets/education.png")} block_style={{height:70,marginTop:15}} img_style={{width:50,height:50}} value={"Elementary (English)"} title={"12 lessons"} />
        <Block img={require("../../assets/education.png")} block_style={{height:70,marginTop:15}} img_style={{width:50,height:50}} value={"Beginner (English)"} title={"10 lessons"} />
      </View>
      <TabNavigation name={route.name} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.color2,
    paddingTop: 80,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
