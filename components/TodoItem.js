import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckboxChecked from "../assets/checkbox-checked.svg";
import CheckboxUnChecked from "../assets/checkbox-unchecked.svg";
import DeleteIcon from "../assets/delete.svg";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slice/todoSlice";
export default function TodoItem(props) {
  console.log(props.id);
  const dispatch = useDispatch();
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.itemTextCheckBox}
        hitSlop={10}
        onPress={() => dispatch(updateTodo(props.id))}
      >
        {props.state === "todo" ? (
          <CheckboxUnChecked />
        ) : (
          <CheckboxChecked style={styles.itemCheckboxCheckedIcon} />
        )}
      </Pressable>
      <Text
        style={[
          styles.itemText,
          props.state === "done" ? styles.itemTextChecked : "",
        ]}
      >
        {props.text}
      </Text>
      <Pressable
        style={[
          styles.deleteButton,
          props.state === "done" ? styles.deleteButtonDone : "",
        ]}
        hitSlop={10}
        onPress={() => dispatch(deleteTodo(props.id))}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  itemTextCheckBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
});
