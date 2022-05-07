import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useState } from 'react';
import AddItem from '../Components/AddItem';
import Lista from '../Components/Lista/Lista';
import AccionModal from '../Components/AccionModal';

const Layout = () => {
    const [taskList, setTaskList] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const onPress = (inputText) => {
      const obj = {
        id: Date.now(), 
        text: inputText,
        done: false
      };
      setTaskList([...taskList, obj]);
    }

    const onDeleteTask = (id) => {
      const filtered = taskList.filter( i => i.id !== id);
      setTaskList(filtered);
    }

    const onEditTask = (id, text) => {
      const task = taskList.find(t => t.id === id);
      task.text = text;
      setTaskList([...taskList]);
    }

    const onDoneTask = (id) => {
      const task = taskList.find(t => t.id === id);
      task.done = !task.done;
      setTaskList([...taskList]);
    }

    return (
        <View style={styles.container}>
            
          <View style={styles.topContainer}>
            <AddItem onPress={onPress}/>
          </View>

          <View style={styles.bodyContainer}>
            <Lista data={taskList} 
              setSelectedTask={setSelectedTask}
              setModalVisible={setModalVisible}/>
          </View>

          <AccionModal 
                visible={modalVisible} 
                setVisible={setModalVisible}
                selectedTask={selectedTask}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
                onDoneTask={onDoneTask}
                />
        </View>
  )
}

export default Layout

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#c5c5c5',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      width:'100%',
      height:'100%',
    },

    topContainer: {
      flex: 0.1,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
    },
    
    bodyContainer: {
      flex: 0.8,
      flexDirection: 'column',
      borderWidth: 1,
      //borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%',
      marginBottom: 10,
    },
  });