import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListItem = ({todo,id,DeleteTodoHandler}) => {
  const [doneState, setDoneState] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={
          doneState ? styles.listContentComplete : styles.listContentIncomplete
        }>
        {todo}
      </Text>
      <TouchableOpacity onPress={() => setDoneState(prev => !prev)}>
        <Text>{doneState ? 'Completed' : 'Incomplete'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => DeleteTodoHandler(id)} disabled={doneState}>
        <Text >Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#f3f5f7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  listContentComplete: {
    width: '60%',
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  listContentIncomplete: {
    width: '60%',
  },
});

export default ListItem;
