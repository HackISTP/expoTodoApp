import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.pageTitle}>Page content</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할일</Text>
        <TodoItem />
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
      <InputForm />
    </SafeAreaView>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#FFC0CB",
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: 600,
  },
  listView: { flex: 1 },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: "500",
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },
});
