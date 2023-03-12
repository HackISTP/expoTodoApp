import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/todoSlice";

const InputForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputFidld}
        value={text}
        onChangeText={setText}
        placeholder="할일을 작성해주세요"
        onSubmitEditing={handleSubmit} //키보드에서 enter눌렀을때
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  inputFidld: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: `rgba(0,0,0,0.2)`,
    borderWidth: 1,
    fontSize: 15,
    textAlignVertical: "center",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    shadowColor: "#A9A9A9",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  addButtonText: {
    color: "#FFC0CB",
    fontSize: 25,
  },
});
