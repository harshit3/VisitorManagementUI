import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { styles } from './style';

class QRCodeScan extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      qrCode: ''
    }
    this.onQRCodeRead = this.onQRCodeRead.bind(this);
  }

  handleChange = (text) => {
    this.setState({
      qrCode: text
    })
  }

  handlePress = () => {
    this.props.handleChange(this.state.qrCode)
  }

  onQRCodeRead(e){
    this.props.handleChange(e.data)
  }
  
  render() {
        return (
            <QRCodeScanner
                onRead={this.onQRCodeRead}
                reactivate={true}
                reactivateTimeout={3000}
                captureAudio={true}
                showMarker={true}
                markerStyle={
                  {borderColor: '#59cdff'}
                }
                bottomContent={
                  <View style={styles.bottomContentContainer}>
                    <TextInput
                      onChangeText={this.handleChange}
                      style={styles.input}
                      placeholder="Enter Manually"
                    />
                    <TouchableOpacity 
                      onPress={this.handlePress}
                      style={styles.buttonTouchable}
                    >
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                  </View>
                }
            />
        );
    }
}  

export default QRCodeScan;