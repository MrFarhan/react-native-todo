import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from '../../components/ListItem';
import {styles} from './Style';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import { userDetailsAction } from '../../redux/Actions';

const Home = ({navigation}) => {
  const [doneState, setDoneState] = useState();
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const state = useSelector(state => state);
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
  const dispatch = useDispatch();

  const HandleLogout = () => {
    auth().signOut();
    dispatch(userDetailsAction({}))
  };

  return (
    <View>
      {/* <SafeAreaView> */}
      <View style={styles.topBanner}>
        <View style={styles.loginGroup}>
          <Text style={styles.userName}>Hello {state?.userDetails?.email}</Text>
          <Pressable onPress={HandleLogout}>
            <Text style={styles.logout}>Logout</Text>
          </Pressable>
        </View>
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
