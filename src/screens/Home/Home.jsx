import React, {useEffect, useState} from 'react';
import {
  FlatList,
  I18nManager,
  Modal,
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
import {userDetailsAction} from '../../redux/Actions';
import {i18n, toggleArabic} from '../../../i18N';
import VectorIcons from '../../constants/vectorIcon';
// import { I18n } from 'i18n-js';

const Home = ({navigation}) => {
  console.log('hello ', i18n.t('home.deal_of_the_week'));
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
    dispatch(userDetailsAction({}));
  };
  const {MaterialCommunityIcons} = VectorIcons;

  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const HandleLanguageSwitcher = () => {
    setShowLanguageModal(true);
    setShowPopupMenu(false);
  };
  
  const HandleChangeLanguageModal = ()=>{
    toggleArabic(!I18nManager.isRTL);

  }

  return (
    <View>
      {/* <SafeAreaView> */}
      <View style={styles.topBanner}>
        <View style={styles.loginGroup}>
          <Text style={styles.userName}>Hello {state?.userDetails?.email}</Text>
          <Pressable onPress={() => setShowPopupMenu(prev => !prev)}>
            <MaterialCommunityIcons
              name="dots-vertical"
              style={styles.dotsMenu}
              size={22}
            />
          </Pressable>
          {showPopupMenu && (
            <View style={styles.menuContent}>
              <TouchableOpacity onPress={HandleLanguageSwitcher}>
                <Text style={styles.menuItem}>Switch language</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={HandleLogout}>
                <Text style={styles.menuItem}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}

          {showLanguageModal && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={showLanguageModal}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setShowLanguageModal(!showLanguageModal);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Are you sure you want to switch your langauge
                  </Text>
                  <View style={styles.modalButtonGroup}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => HandleChangeLanguageModal()}>
                      <Text style={styles.textStyle}>Yes</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setShowLanguageModal(!showLanguageModal)}>
                      <Text style={styles.textStyle}>No</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          )}
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
