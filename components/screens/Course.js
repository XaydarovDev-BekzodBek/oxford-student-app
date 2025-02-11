import { FlatList, StyleSheet, Text, View } from "react-native";
import TabNavigation from "./TabNavigation";
import Header from "./Header";
import { Colors } from "../../utils/colors";
import Title from "../ui/Title";
import Block from "../ui/Block";
import { CoursesData } from "../../utils/data";
import { useNavigation } from "@react-navigation/native";



export default function Course({route}) {
  const navigation = useNavigation()
  return (
    <>
      <Header  />
      <View style={styles.container}>
        <Title text={"Courses"} />
        <FlatList data={CoursesData} renderItem={({ item }) => <Block
          onPress={() => {
            navigation.navigate('Units', { unitId: item.id ,title:item.title})
          }} img={item.img} block_style={{ height: 70, marginTop: 15 }} img_style={{ width: 50, height: 50 }} value={item.title}
          title={`${item.lessons.length} lessons`} />}

          keyExtractor={item => item.id} />
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
    flex:1
  },
});
