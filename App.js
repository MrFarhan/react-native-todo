
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  FlatList,
  Icon
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoUpdate, setTodoUpdate] = useState(false)

  const DeleteTodo = (title, id) => {
    let allTodos = todos || [];

    if (title) {
      return setTodos(allTodos?.filter((item) => item?.id !== id))

    }
    console.log("all todos are", allTodos, "title", title)
  }

  const EditTodo = (title, id) => {
    if (title?.trim()?.length && id) {
      setTodo(title)
      setTodoUpdate({todo:title, id:id})
      // let allTodos = todos || [];
      // let index = allTodos.findIndex((item) => item.id === id)
      // allTodos[index].todo = title
      // setTodos(allTodos)
      // console.log("index for update is",)   

    }
  }

  const UpdateTodo = () => {
    console.log("update todo working",todoUpdate)
    if (todoUpdate?.id && todoUpdate?.todo) {
      let allTodos = todos || [];
      let index = allTodos.findIndex((item) => item.id === todoUpdate?.id)
      allTodos[index].todo = todo
      setTodos(allTodos)
      setTodoUpdate('')
      setTodo('')
    }
  }
  const AddTodo = () => {
    if (todo.trim()?.length) {
      setTodos((prev) => [...prev, { todo: todo, id: Math.random() }])
      setTodo('')
    }
  }

  const CancelUpdate = () => {
    setTodoUpdate('')
    setTodo('')
    // if (todo.trim()?.length) {
    //   setTodos((prev) => [...prev, { todo: todo, id: Math.random() }])
    //   setTodo('')
    // }
  }
  console.log("todos are", todos)
  const Item = ({ title, id }) => (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Text style={{ width: 200 }}>{title}</Text>
      </View>
      <Button onPress={() => EditTodo(title, id)} title="Edit" disabled={todo.length || todoUpdate?.todo}></Button>
      <Button onPress={() => DeleteTodo(title, id)} title="Delete" disabled={todo.length || todoUpdate?.todo}></Button>
    </View>
  );




  const renderItem = ({ item }) => (
    <Item title={item?.todo} id={item?.id} />
  );

  console.log("todo update is",todoUpdate)

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View>
        <Text>Native Todo</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput keyboardType='numeric'
            style={{ padding: 20, width: 200 }}
            value={todo}
            onChangeText={(text) => setTodo(text)}
            // value={this.state.myNumber}
            maxLength={10} ></TextInput>
          <Button
            onPress={() => todoUpdate?.todo ? UpdateTodo() : AddTodo()}
            title={todoUpdate?.todo ? "Update" : "Enter"}
            color="#841584"
            disabled={!todo.trim().length}
          />
          <Button
            onPress={() => todoUpdate ? CancelUpdate(): setTodo('')}
            title={todoUpdate ? "Cancel update" :"Clear"}
            color="#841584"
            // disabled={!todo.trim().length}
          />
        </View>
        {todos?.length ? <View style={{ height: 900 }}>
          <FlatList
            data={todos?.length ? todos : []}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View> :
          <View style={{ height: 900, justifyContent: "center", alignItems: "center" }}>
            <Text>Yahoooo! Nothing to do</Text>
          </View>}
        {/* <View><Text>{todos}</Text></View> */}
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
