import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { styles } from './style';
import { TouchableHighlight } from 'react-native-gesture-handler';

class QRCodeScan extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      code: '',
      count: 0
    }
    this.onQRCodeRead = this.onQRCodeRead.bind(this);
  }

  handleChange = (text) => {
    this.setState({
      code: text
    })
  }

  handlePress = () => {
    this.props.handleChange(this.state.code)
  }

  handleSkip = () => {
    this.setState({
      count: this.state.count + 1
    }, () => this.props.handleChange(''))  
  }

  onQRCodeRead(e){
    this.setState({
      count: this.state.count + 1
    }, () => this.props.handleChange(e.data)) 
  }
  
  render() {
        return (
            <QRCodeScanner
                onRead={this.onQRCodeRead}
                reactivate={this.state.count===1?false:true}
                reactivateTimeout={1000}
                captureAudio={true}
                topContent={
                  <View style={styles.topContentContainer}>
                    <Text style={!this.props.isQRCode?styles.centerText:styles.centerSuccessText}>
                      Scan 
                      <Text 
                        style={!this.props.isQRCode?styles.textBold:styles.textSuccessBold}
                      >
                        {!this.props.isQRCode?' QR Code':' Laptop Barcode'}
                      </Text>   
                    </Text>
                  </View>
                }
                bottomContent={
                  <View style={styles.bottomContentContainer}>
                    <View style={styles.bottomInputContainer}>
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
                      {this.props.isQRCode
                      ?<TouchableOpacity
                        onPress={this.handleSkip}
                        style={styles.skipButton}
                      >
                        <Text
                          style={styles.linkText}
                        >
                          Skip Laptop Detail
                        </Text>
                      </TouchableOpacity>
                      :null
                      }
                  </View>
                }
            />
        );
    }
}  

export default QRCodeScan;