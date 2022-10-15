import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import NewsItem from '../../components/NewsItem/NewsItem';
import {styles} from './Style';

const News = () => {
  return (
    <View>
      <SafeAreaView>
        <Header title="Your news header here" />
        <Text style={styles.headlines}>Headlines</Text>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </SafeAreaView>
    </View>
  );
};

export default News;
