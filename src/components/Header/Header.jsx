import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Style';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
