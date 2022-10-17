import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header/Header';
import NewsItem from '../../components/NewsItem/NewsItem';
import {styles} from './Style';
import {NEWS_API} from '@env'


const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        NEWS_API,
      )
      .then(response => {
        setNews(response?.data?.results);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log('error is', err);
      });
  }, []);
  return (
    <View>
      <SafeAreaView>
        <Header title="Your news header here" />
        <Text style={styles.headlines}>Headlines</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            contentContainerStyle={{paddingBottom: 200}}
            data={news}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <NewsItem title={item?.title} publishedDate={item?.pubDate} key={Math.random()}/>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default News;
