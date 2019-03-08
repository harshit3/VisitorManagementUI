import React, { Component } from 'react';
import { Text, View, TextInput, ToastAndroid } from 'react-native';
import { styles } from './FormStyle';
import ReactChipsInput from './react-chips/index';
import SlidingUpPanel from 'rn-sliding-up-panel';
export default class InputField extends Component {
  state = {
    isFocused: false
  }
  nameArr = []

  handleFocus = event => {
    this.setState({
      isFocused: true
    });
    if (this.props.fieldName == 'name') {
      // console.warn('This is name field')

    }
    this.props.fieldFocused(true)
  }

  handleBlur = event => {
    // console.log('This is event',this.state.value)
    this.setState({
      isFocused: false
    });
    // console.log('Going to set key as ',this.props.fieldName)
    // this.props.fieldFocused(false)
  }

  handleChangeText = text => {
    if (this.props.fieldName == 'name') {
      this.setState({
        value: [text]
      });
    } else {
      this.setState({
        value: text
      });
    }
    // If above behaves asynchronusly foloowing line may not set the ste properly
    this.props.saveForm(this.props.fieldName, this.state.value);
  }
  handleNameAdd = name => {
    console.warn('Chip added')
    if (this.nameArr.length < 5) { this.nameArr.push(name) }
    else {
     ToastAndroid.show('Maximum 5 visitors allowed',ToastAndroid.SHORT)

    }
    this.props.saveForm(this.props.fieldName, this.nameArr);
  }


  handleNameRemove = (index) => {
    // console.warn('Name remove at',index,'from',this.state)

    newArray = (this.props.formObject.name)
    newArray.splice(index, 1);
    this.props.saveForm(this.props.fieldName, newArray);
  }


  render() {
    
    if (this.props.fieldName == 'name' && this.props.multipalNamesAllowed) {
      // console.warn('While rendering',this.props.formObject)
      return (
        
          <ReactChipsInput onBlur={(chips) => this.handleNameAdd()} handleNameRemove={this.handleNameRemove}  initialChips={this.props.formObject.name} onChangeChips={(chips) => this.handleNameAdd(chips[chips.length - 1])} alertRequired={false} chipStyle={{ borderColor: 'blue', backgroundColor: 'grey' }} />
       
      )
    } else {
      return (
        <View style={styles.inputFieldContainer}>
          <Text style={this.state.isFocused ? styles.label : ''}>
            {this.state.isFocused ? this.props.placeholder : ''}
          </Text>
          <TextInput
            placeholder={!this.state.isFocused & !this.state.value ? this.props.placeholder : null}
            selectionColor={this.props.selectionColor}
            keyboardType={this.props.keyboardType}
            value={this.state[this.props.fieldName]}
            underlineColorAndroid={this.state.isFocused ? this.props.focusedUnderlineColor : this.props.blurUnderlineColor}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChangeText={this.handleChangeText}
            defaultValue={this.props.defaultValue}
            editable={this.props.editable}
            multipalNamesAllowed={this.props.multipalNamesAllowed}
            returnKeyLabel='next'
          />
        </View>
      );
    }
  }
}

