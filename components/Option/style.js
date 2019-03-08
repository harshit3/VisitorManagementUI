import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    optionContainer:{
        flex: 1,
        height: Math.floor(Dimensions.get('window').height/6),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99ccff',
        borderRadius: 5,
        margin: (Dimensions.get('window').height%(6*5))/4?(Dimensions.get('window').height%(6*5))/4:2,
    },
    text:{
        fontSize: 20,
        textAlign: 'center'
    }
})