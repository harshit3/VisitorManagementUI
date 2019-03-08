import React, { Component } from 'react';
import { View } from 'react-native';
import Grid from 'react-native-grid-component';
import Option from '../Option';

class RequestRaise extends Component {
    static navigationOptions = {
        title: 'Raise Visit Request'
    }      

    render() {
        const options = ['New Joinee','Forgot/Lost Card','Visitor','VIP','Family','Conference Attendee','Client','Vendor','Interviewee','Guest']
        return (
            <View
                style={{flex:1}}
            >
                <Grid
                    data={options}
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