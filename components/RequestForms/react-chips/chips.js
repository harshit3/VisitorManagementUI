import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Chips = (props) => {
    const { value, onPress, chipStyle } = props;
    return (
        <TouchableOpacity style={[styles.chip, chipStyle]} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[{ paddingHorizontal: 5 }]}>{value}</Text>
                <View style={styles.chipCloseBtn}><Text style={styles.chipCloseBtnTxt}>x</Text></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    chip: {
        borderColor: '#848787',
        borderWidth: 1,
        margin: 2,
        // paddingVertical: 5,
        paddingHorizontal: 2,
        borderRadius: 15
    },
    chipCloseBtn: {
        borderRadius: 8,
        width: 16,
        height: 16,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chipCloseBtnTxt: {
        color: '#555',
        paddingBottom: 3
    },
        panelView:{
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        margin: 10,
        borderColor: '#59cdff',
        borderBottomWidth: 1,
    }
})

export default Chips;