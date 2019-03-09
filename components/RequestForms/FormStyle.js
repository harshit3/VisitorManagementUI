import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    formScrollContainer:{
        height:Dimensions.get("window").height - 0,
        // justifyContent:'space-around',
        // flexDirection:'column',
    },
    formContainer:{
        // flex:100,
        // height:Dimensions.get("window").height - 0,
        // justifyContent:'space-around',
        // flexDirection:'column',
        paddingBottom:'5%'
    },
    formBodyExpand:{
        flex:10,
        flexDirection:'column',
        justifyContent:'space-evenly',
    },
    formBodyShrink:{
        flex:10,
        flexDirection:'column',
        justifyContent:'space-evenly',
    },
    inputFieldContainer:{
        flex:1,
        paddingLeft:5,
        padding:20,
        // marginBottom
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
        fontSize: 20,
        flex:1,
        // padding:10,

        // marginTop:'10%'
    },
    touch:{
        position:'absolute',
        bottom:0,
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        justifyContent:'center',
        flex:1,
        height:'5%',
        // marginTop:'20%',
        flexDirection:'column',
        // padding:2
        width:'100%'
    },

});