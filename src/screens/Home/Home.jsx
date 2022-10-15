import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from '../../components/ListItem';
import { styles } from './Style';

const Home = () => {
  const [deleteState, setDeleteState] = useState();
  const [doneState, setDoneState] = useState();
  return (
    <View>
      {/* <SafeAreaView> */}
        <View style={styles.topBanner}>
          <Text style={styles.userName}>Hello Ussssser</Text>
          <Text style={styles.subParagraphs}>What are you doing today?</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={'number'}
              placeholder="Add your todo here"
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => console.warn('Add button clicked')}>
              <Text> +</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subParagraphs}>Your To-Do List:</Text>
          <View>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </View>
        </View>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default Home;