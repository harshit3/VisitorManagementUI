import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { styles } from './style';

class QRCodeScan extends Component {
  
  constructor(props){
    super(props);
    this.onQRCodeRead = this.onQRCodeRead.bind(this);
    this.state={}
  }

  onQRCodeRead(e){
    this.setState({
      scanResult: e.data
    })
  }
  
  render() {
        return (
            <QRCodeScanner
                onRead={this.onQRCodeRead}
                captureAudio={true}
                showMarker={true}
                markerStyle={
                  {borderColor: '#59cdff'}
                }
                topContent={
                  <View style={styles.contentContainer}>
                    <Text style={styles.centerText}>
                      Scan <Text style={styles.textBold}>QR Code</Text> to get gate pass   
                    </Text>
                  </View>
                }
                bottomContent={
                  <View style={styles.contentContainer}>
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