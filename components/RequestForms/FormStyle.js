import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'column',
    },
    formBodyExpand:{
        flex:10,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    formBodyShrink:{
        flex:10,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    inputFieldContainer:{
        flex:1,
        paddingLeft:5,
    },
    chipInput:{
        fontSize:10,
        backgroundColor:'pink'
    },
    label:{
        marginTop:20,
        marginBottom: -20, 
        color:'black',
        width:'100%',
        paddingLeft:5,
        height:'50%',
        fontSize:12,
    },
    buttonText:{
        backgroundColor:"#00BCD4",
        fontWeight: 'bold',
        fontSize: 20
    },
    touch:{
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        justifyContent:'center',
        flex:1,
    },

});