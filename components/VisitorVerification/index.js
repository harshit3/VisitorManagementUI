import React, { Component } from 'react';
import { View, TextInput, Animated } from 'react-native';
import QRCodeScan from '../QRCodeScanner';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { styles } from './style';

class VisitorVerification extends Component {
    static navigationOptions = {
        title: 'Scan QR Code'
    }

    state = {
        qrCode: '',
        animatedValue: new Animated.Value(0)
    }

    showPanel = () => {
        this.input.focus();
        this.panel.show();    
    }

    handleChange = (text) => {
        this.setState({
            qrCode: text
        })
    }

    render() {
        return (
            <View style={{flex:1,justifyContent: 'center'}}>
                <QRCodeScan 
                    showPanel={this.showPanel} 
                    handleChange={this.handleChange}
                />
                <SlidingUpPanel 
                    ref={node => this.panel = node}
                    draggableRange={{top:500,bottom:0}}
                    animatedValue={this.state.animatedValue}
                >
                    <View style={styles.panelView}>
                        <TextInput
                            ref={node => this.input = node} 
                            placeholder="Enter Code"
                            onChangeText={this.handleChange}
                            style={styles.input}
                        />
                    </View>
                </SlidingUpPanel>
            </View>
        );
    }
}

export default VisitorVerification;