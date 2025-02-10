import { StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import { Colors } from "../../utils/colors";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function TabNavigation({ name }) {
  const data = ["Profile"];
  if (data.includes(name)) {
    return null;
  }
  const navigation = useNavigation();
  const checkIcon = (iconName, icon1, icon2) => {
    return iconName === name ? icon1 : icon2;
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate("Home")} style={styles.icon}>
        {checkIcon(
          "Home",
          <Entypo name="home" size={24} color="white" />,
          <Feather name="home" size={24} color="white" />
        )}
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Course")} style={styles.icon}>
        {checkIcon(
          "Course",
          <FontAwesome5 name="book-open" size={24} color="white" />,
          <Feather name="book-open" size={24} color="white" />
        )}
      </TouchableHighlight>

      <TouchableHighlight style={styles.centerIcon}>
        <AntDesign name="appstore1" size={25} color={Colors.blue} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Group")} style={styles.icon}>
        {checkIcon(
          "Group",
          <MaterialIcons name="people" size={24} color="white" />,
          <Ionicons name="people-outline" size={24} color="white" />
        )}
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate("Ranking")} style={styles.icon}>
        {checkIcon(
          "Ranking",
          <MaterialCommunityIcons name="medal" size={24} color="white" />,
          <MaterialCommunityIcons
            name="medal-outline"
            size={24}
            color="white"
          />
        )}
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    left: 25,
    width: "90%",
    height: 70,
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
  },
  centerIcon: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginTop: -20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
