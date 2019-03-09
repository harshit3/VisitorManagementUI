import React, { Component } from 'react';
import { View, Text, TextInput, Animated, ToastAndroid } from 'react-native';
import QRCodeScan from '../QRCodeScanner';
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
        // },
        // () => {
        //     console.log(this.state.qrCode);
        //     fetch(`http://192.168.43.179:8080/qrValidate`,{
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({qrCode:this.state.qrCode})
        //     })
        //     .then(response => {
        //         ToastAndroid.show('Welcome to infosys!',ToastAndroid.SHORT)
        //         setTimeout(() => console.log(response.ok),5000)
        //     })
        //     .catch(error => console.log(error))
        // })
    }

    handleLaptopCodeChange = (text) => {
        this.setState({
            laptopCode: text,
        },
        () => {
            console.log(this.state.qrCode);
            fetch(`http://192.168.43.179:8080/getPDF`,{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    qrCode: this.state.qrCode,
                    laptopCode: this.state.laptopCode
                })
            })
            .then(response => response.text())
            .then(data => this.props.navigation.navigate('visitorpass', {base64: data}))
            .catch(error => console.log(error))
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