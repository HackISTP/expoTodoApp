import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckboxChecked from "../assets/checkbox-checked.svg";
import CheckboxUnChecked from "../assets/checkbox-unchecked.svg";
import DeleteIcon from "../assets/delete.svg";
export default function TodoItem() {
  return (
    <View>
      <Text style={styles.itemContainer}>TodoItem</Text>
      <Pressable style={styles.itemTextChecked} hitSlop={10}>
        <CheckboxChecked />
        <CheckboxUnChecked style={styles.itemCheckboxCheckedIcon} />
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>코딩하기</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    // paddingTop: 10,
  },
});
