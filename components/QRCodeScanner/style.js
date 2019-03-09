import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centerText: {
      fontSize: 18,
      marginBottom: 45,
      color: '#777',
    },
    centerSuccessText: {
      fontSize: 18,
      marginBottom: 45,
      color: 'green',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    textSuccessBold: {
      fontWeight: '500',
      color: 'green',
    },
    bottomContentContainer:{
        flex:1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -50,
        backgroundColor: 'white',
    },
    bottomInputContainer:{
      flex:1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: 'white',
    },
    topContentContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
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
    input: {
      flex: 5,
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingBottom: 0,
      marginLeft: 5,
    },
    skipButton: {
      flex: 1,
      backgroundColor: 'white'
    },
    linkText: {
      color: 'blue',
      fontSize: 20,
      backgroundColor: 'white',
    }
  });