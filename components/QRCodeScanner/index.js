import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { styles } from './style';

class QRCodeScan extends Component {
  
  constructor(props){
    super(props);
    this.onQRCodeRead = this.onQRCodeRead.bind(this);
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
                    <TouchableOpacity 
                      style={styles.buttonTouchable}
                      onPress={this.props.showPanel}
                    >
                        <Text style={styles.buttonText}>Enter Manually</Text>
                    </TouchableOpacity>
                  </View>
                }
            />
        );
    }
}  

export default QRCodeScan;