import React, { Component } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import QRCodeScan from '../QRCodeScanner';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

class VisitorVerification extends Component {
    static navigationOptions = {
        title: 'Scan Code'
    }

    state = {
        isQRCode: false,
        qrCode: '',
        laptopCode: '',
        animatedValue: new Animated.Value(0)
    }

    handleQRCodeChange = (text) => {
        this.setState({
            qrCode: text,
            isQRCode: true
        })
    }

    handleLaptopCodeChange = (text) => {
        this.setState({
            laptopCode: text,
        })
    }

    render() {
        console.log(this.state)
        return (
            <View style={{flex:1,justifyContent: 'center'}}>
                <QRCodeScan 
                    isQRCode={this.state.isQRCode}
                    handleChange={this.state.isQRCode?this.handleLaptopCodeChange:this.handleQRCodeChange}
                />
            </View>
        );
    }
}

export default VisitorVerification;