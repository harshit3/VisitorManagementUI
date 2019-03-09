import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centerText: {
      fontSize: 18,
      padding: 45,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    bottomContentContainer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        marginTop: -20
    },
    buttonText: {
      fontSize: 21,
    },
    buttonTouchable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 1,
    },
    topContentContainer:{
      flex:1,
      justifyContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      flex: 5,
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingBottom: 0,
    }
  });