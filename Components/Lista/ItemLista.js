import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import checkImage from '../../assets/images/check.png'


const ItemLista = (props) => {
  const { task, onPress } = props;

  const onPressLocal = () => {
    onPress(task);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={onPressLocal}>
        {task.done ? (
          <Image
            source={checkImage}
            style={styles.image}
          />
        ) : (
          <></>
        )}
        <Text style={styles.text}>{task.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemLista;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 4,
  },

  text: {
    alignItems: "center",
    marginLeft: 5,
    fontSize: 16,
  },

  image: {
    width: 24,
    height: 24,
  },
});
