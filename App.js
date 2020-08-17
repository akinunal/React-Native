import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addItemHandler = (text) => {
    setItems([...items, { id: Math.random().toString(), value: text }]);
    setOpenModal(false);
  };

  const onDeleteHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setOpenModal(true)} />
      <View style={styles.texts}>
        {items.length > 0 && (
          <Text style={{ color: "red" }}>
            Click on a goal to delete from list
          </Text>
        )}
      </View>
      <View style={styles.texts}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>List of Goals:</Text>
      </View>
      <GoalInput
        addItemHandler={addItemHandler}
        visible={openModal}
        setVisible={setOpenModal}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            number={itemData.index + 1}
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={onDeleteHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 80,
    paddingHorizontal: 50,
  },
  texts: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
});
