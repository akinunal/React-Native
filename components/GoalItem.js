import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function GoalItem({ title, onDelete, id, number }) {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.itemContainer}>
        <Text style={{ marginRight: 15 }}>{number}</Text>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#eee",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
});
