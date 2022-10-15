import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from '../../components/ListItem';
import {styles} from './Style';

const Home = () => {
  const [doneState, setDoneState] = useState();
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const AddTodoHandler = () => {
    if (todo.trim()) {
      setTodos(prev =>
        !!prev.length
          ? [...prev, {todo: todo, id: todos.length + 1}]
          : [{todo: todo, id: 1}],
      );
      setTodo('');
    }
  };

  const DeleteTodoHandler = id => {
    console.log('my id is', id);
    let prevTodos = todos;

    setTodos(prevTodos?.filter(item => item.id !== id));
  };
  console.log('hello', todo, todos);
  return (
    <View>
      {/* <SafeAreaView> */}
      <View style={styles.topBanner}>
        <Text style={styles.userName}>Hello Ussssser</Text>
        <Text style={styles.subParagraphs}>What are you doing today?</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            onChangeText={setTodo}
            value={todo}
            placeholder="Add your todo here"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.addButton} onPress={AddTodoHandler}>
            <Text> +</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subParagraphs}>Your To-Do List:</Text>
        <View>
          {!todos?.length ? (
            <Text
              style={{padding: 50, fontWeight: 'bold', textAlign: 'center'}}>
              Wahoooo ! You have done all of your tasks!
            </Text>
          ) : (
            <FlatList
              style={{height: 600}}
              contentContainerStyle={{paddingBottom: 15}}
              data={todos}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <ListItem
                  id={item.id}
                  todo={item.todo}
                  key={item.id}
                  DeleteTodoHandler={DeleteTodoHandler}
                />
              )}
            />
          )}
        </View>
      </View>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default Home;
