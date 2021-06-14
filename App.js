import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TextInput,Button,SafeAreaView,FlatList } from "react-native";
import TaskItem from './TaskItem';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleDeleteTask = (itemIndex) => {
    console.log('index', itemIndex);
    setTasks((prevTask) =>
      prevTask.filter((item, index) => index !== itemIndex),
    );
  };
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={styles.centeredView}>
          <SafeAreaView style={styles.modalView}>
          <TextInput
        style={styles.textInput}
        placeholder={'タスクを入力してください'}
        onChangeText={(text) => {
          setInputTask(text);
        }}
        value={inputTask}
      />
        <Pressable
          style={[styles.button, styles.buttonClose]} 
          const onPress={() => {
          setTasks((prevTask) => {
            return [...prevTask, inputTask];
            },setInputTask(''),setModalVisible(!modalVisible)
            );
            }}                           
            >
          <Text style={styles.textStyle}>追加</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>キャンセル</Text>
        </Pressable>
          </SafeAreaView>
        </SafeAreaView>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen,styles.buttonClose]}
        onPress={() => setModalVisible(true)} 
      >
         <Text style={styles.textStyle}>タスクリストに追加</Text>
      </Pressable>
      <FlatList
        style={styles.list}
        keyExtractor={(_item, index) => index.toString()}
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem
            title={item}
            onDeleteTask={handleDeleteTask}
            index={index}
          />
        )}
      />
    </SafeAreaView>
  );
};

　　const styles = StyleSheet.create({
  centeredView: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:'80%',
    height:'30%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginTop: 22,
    borderRadius: 20,
    padding: 13,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  textInput: {
    marginTop: 24,
      width: '80%',
      borderWidth: 1,
      borderColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
  list: { flex: 1, width: '80%', marginTop: 24 },
  });
export default App;