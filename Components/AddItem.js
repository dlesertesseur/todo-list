import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";

const AddItem = (props) => {
  const { onPress } = props;

  const [inputText, onChangeText] = React.useState("");

  const localOnPress = () => {
    onPress(inputText);
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="TODO"
        onChangeText={onChangeText}
        value={inputText}
      />
      <TouchableOpacity style={styles.button} onPress={localOnPress}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 40,
    borderWidth: 1,
    padding: 5,
    marginRight: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderWidth: 1,
    padding: 10,
    width: "20%",
    borderRadius: 10,
  },
});
