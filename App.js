import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from './components/ListItem';

const App = () => {
  const [deleteState, setDeleteState] = useState();
  const [doneState, setDoneState] = useState();
  return (
    <SafeAreaView>
      <View style={styles.topBanner}>
        <Text style={styles.userName}>Hello User</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBanner: {
    backgroundColor: '#6d63ff',
    height: 280,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    borderRadius: 2,
  },
  userName: {
    padding: 10,
    paddingTop: 80,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 7,
    width: '85%',
    backgroundColor: 'white',
  },
  subParagraphs: {
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    paddingTop: 0,
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  addButton: {
    fontSize: 70,
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderRadius: 10,
  },
});

export default App;
