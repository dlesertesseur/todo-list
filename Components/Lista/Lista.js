import { StyleSheet, FlatList, View, Text} from 'react-native'
import React from 'react'
import ItemLista from './ItemLista';

const Lista = (props) => {
    const {data, setSelectedTask, setModalVisible} = props;

    const onPress = (task) => {
        setSelectedTask(task);
        setModalVisible(true);
    }

    const renderItem = ({item}) => {
        return (<ItemLista 
            task={item} 
            key={item.id} 
            onPress={onPress}/>)
      }

    return (
        <View style={styles.container}>
            {data.length > 0 
            ?
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={task => task.id}

            />
            :
            <View style={styles.emptyContainer}>
                <Text> SIN DATOS</Text>
            </View>
            }
        </View>
  )
}

export default Lista

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
      },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
     }
})