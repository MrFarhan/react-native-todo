import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  newsItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    width: '90%',
    // justifyContent:"center",
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:5,
    backgroundColor:"#fffdfd"
  },
  headingContainer: {
    width: '65%',
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  reportedBy: {
    color: 'gray',
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
