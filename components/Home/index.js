import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

class Home extends Component {
    constructor(props){
        super(props);
        this.goToRequestRaise = this.goToRequestRaise.bind(this);
        this.goToVisitorVerification = this.goToVisitorVerification.bind(this);
    }

    static navigationOptions = {
        title: 'Visitor Management',
        headerTitleStyle: { flex:1, textAlign: 'center' }
    }

    goToRequestRaise() {
        this.props.navigation.navigate('requestraise');    
    }

    goToVisitorVerification() {
        this.props.navigation.navigate('visitorverification');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.goToRequestRaise}
                >
                    <Text style={styles.text}>Request Raise</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.goToVisitorVerification}
                >
                    <Text style={styles.text}>Visitor Verification</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;