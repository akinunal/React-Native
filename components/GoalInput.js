import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function GoalInput({ addItemHandler, visible, setVisible }) {
  const [text, setText] = useState("");

  const inputOnchangeHandler = (enteredText) => {
    setText(enteredText);
  };

  const addGoalHandler = () => {
    if (text.length === 0) return;
    addItemHandler(text);
    setText("");
  };

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write your goal"
          style={styles.inputStyle}
          onChangeText={inputOnchangeHandler}
          value={text}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Button
            title="Cancel"
            color="red"
            onPress={() => setVisible(false)}
          />
          <Button title="Add" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    width: "80%",
  },
});
