import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Alert } from 'react-native';
import Chips from './chips';

class ReactChipsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            chips: (props.initialChips) ? props.initialChips : [],
            inputText: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            chips: (nextProps.initialChips) ? nextProps.initialChips : []
        });
    }
    handleFocus = () => { this.setState({ isFocused: true }) }
    handleChangeText = (text) => { this.setState({ inputText: text }) }
    removeChip = (index) => {
        this.props.handleNameRemove(index)
        // const newArray = [...this.state.chips]

        // newArray.splice(index, 1);
        // this.setState({
        //     chips: newArray
        // }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips));
        // if (this.props.alertRequired) Alert.alert('', 'Removed Successfully')
    }
    handleBlur = () => {
        if (this.state.inputText !== '' && this.state.chips.indexOf(this.state.inputText) === -1) {
            this.setState({
                chips: [...this.state.chips, this.state.inputText],
                inputText: "",
                isFocused: false
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips));
            if (this.props.alertRequired) Alert.alert('', 'Added Successfully');
        } else {
            this.setState({
                inputText: "",
                isFocused: false
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips))
            if (this.props.alertRequired) Alert.alert('Added Successfully', 'Chip Element already present');
        }
    }
    render() {
        const { label, chipStyle } = this.props;
        const inputLabel = (isFocused) ? 'Entered Names' : 'Press Return to enter name'
        const { isFocused, inputText } = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 5,
            top: !isFocused ? 1 : 1,
            opacity: !isFocused ? 0 : 1,
            fontSize: !isFocused ? 14 : 12,
            color: !isFocused ? '#aaa' : '#000',
        }
        const chips = this.state.chips.map((item, index) => (
            <Chips
                key={index}
                value={item}
                chipStyle={chipStyle}
                onPress={() => this.removeChip(index)} />
        ));
        return (
            <View>
                <View style={{ paddingTop: 18, marginTop: 15 }}>
                    <Text style={labelStyle}>
                        {inputLabel}
                    </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                        {chips}
                    </View>
                    <TextInput
                        style={styles.textInput}
                        onFocus={this.handleFocus}
                        onChangeText={(text) => this.handleChangeText(text)}
                        onSubmitEditing={this.handleBlur}
                        value={inputText}
                        underlineColorAndroid={isFocused ? '#00bcd4' : '#9b9b9b'}
                        placeholder={chips.length > 0 ? null : 'Enter one or more names'}
                    />
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        height : 32,
        fontSize: 14,
        padding: 7,
        paddingBottom:11,
        color: '#000'
    }
});

export default ReactChipsInput;