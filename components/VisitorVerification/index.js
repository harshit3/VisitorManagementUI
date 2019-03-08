import React, { Component } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import QRCodeScan from '../QRCodeScanner';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

class VisitorVerification extends Component {
    static navigationOptions = {
        title: 'Scan QR Code'
    }

    state = {
        qrCode: '',
        animatedValue: new Animated.Value(0)
    }

    handleChange = (text) => {
        this.setState({
            qrCode: text
        })
    }

    render() {
        console.log(this.state)
        return (
            <View style={{flex:1,justifyContent: 'center'}}>
                <QRCodeScan 
                    handleChange={this.handleChange}
                />
            </View>
        );
    }
}

export default VisitorVerification;