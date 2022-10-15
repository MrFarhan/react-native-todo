import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Style';

const NewsItem = ({title,publishedDate}) => {
  return (
    <View style={styles.newsItem}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
         {title}
        </Text>
        <Text style={styles.reportedBy}>{publishedDate}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/card_img/1581157110972383232/EaJjIAW1?format=jpg&name=360x360',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default NewsItem;
