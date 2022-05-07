import { StyleSheet, View, Modal, Button, TextInput } from "react-native";
import React from "react";

const AccionModal = (props) => {
  const {
    visible,
    setVisible,
    selectedTask,
    onDeleteTask,
    onEditTask,
    onDoneTask,
  } = props;

  const [editedValue, setEditedValue] = React.useState("");

  React.useEffect(() => {
    if (selectedTask !== null) {
      setEditedValue(selectedTask.text);
    } else {
      setEditedValue("");
    }
    //console.log("AccionModal::useEffect() -> " + JSON.stringify(selectedTask));
  }, [visible]);

  const onEdit = () => {
    onEditTask(selectedTask.id, editedValue);
    setVisible(false);
  };

  const onDone = () => {
    onDoneTask(selectedTask.id);
    setVisible(false);
  };

  const onDelete = () => {
    onDeleteTask(selectedTask.id);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.options}>
          <TextInput
            style={styles.editText}
            value={editedValue}
            onChangeText={setEditedValue}
          />
          <Button title="Eliminar" color="#ff5c5c" onPress={onDelete} />
          <Button title="Realizada / No realizada" onPress={onDone} />
          <Button title="Editar" onPress={onEdit} />
          <Button title="Cancelar" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

export default AccionModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  options: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderWidth: 1,
    height: 220,
    borderColor: "#fff",
    width: "80%",
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },

  editText: {
    height: 30,
    width: "100%",
    color: "#000000",
    borderWidth: 1,
    borderColor: "#000000",
    paddingLeft: 5,
  },
});
