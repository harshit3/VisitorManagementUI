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
    topContentContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContentContainer:{
      flex:1,
      paddingTop: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingBottom: 0
    }
  });