import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
