import React, { Component } from 'react';
import { View } from 'react-native';
import Grid from 'react-native-grid-component';
import Option from '../Option';

class RequestRaise extends Component {
    static navigationOptions = {
        title: 'Raise Visit Request'
    }      
    options = [
        ['newJoinee','New Joinee'],
        ['forgotId','Forgot/Lost Card'],
        ['visitor','Visitor'],
        ['vip','VIP'],
        ['family','Family'],
        ['conferenceAttendee','Conference Attendee'],
        ['client','Client'],
        ['vendor','Vendor'],
        ['interviewee','Interviewee'],
        ['guest','Guest']
    ]
    
    render() {
        return (
            <View
                style={{flex:1}}
            >
                <Grid
                    data={this.options}
                    renderItem={(data, i) => 
                        <Option 
                            option={data} 
                            key={i}
                        />
                    }
                    itemsPerRow={2}
                />
            </View>
        );
    }
}

export default RequestRaise;