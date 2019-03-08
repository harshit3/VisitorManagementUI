import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './style';

const colors = [ '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50' ];
const included = []
function generateColors(){
    let i = 0
    let random = Math.floor(Math.random() * colors.length )
    while(included.includes(i)){
        random = Math.floor(Math.random() * colors.length )
    }
    return(colors[random])
}

class Option extends React.Component {

    goToRaiseRequest = () => {
        this.props.navigation.navigate('visitor',{ visitorType: this.props.option[0] })
    }

    render(){
        return (
            <TouchableOpacity
                onPress={this.goToRaiseRequest}
                style={{...styles.optionContainer, backgroundColor: `${generateColors()}`}}
            >
                <Text
                    style={styles.text}
                >
                    {this.props.option[1]}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(Option);