import React, { Component } from 'react';
import { Text, View, TextInput, ToastAndroid } from 'react-native';
import { styles } from './FormStyle';
import ReactChipsInput from './react-chips/index';
export default class InputField extends Component {
  state = {
    isFocused: false
  }
  nameArr = []

  handleFocus = event => {
    this.setState({
      isFocused: true
    });
    if (this.props.fieldName == 'visitorName') {
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
    if (this.props.fieldName == 'visitorName') {
      this.setState({
        value: [text]
      }, () => this.props.saveForm(this.props.fieldName, this.state.value));
    } else {
      this.setState({
        value: text
      }, () => this.props.saveForm(this.props.fieldName, this.state.value));
    }
    // If above behaves asynchronusly foloowing line may not set the ste properly
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

    newArray = (this.props.formObject.visitorName)
    newArray.splice(index, 1);
    this.props.saveForm(this.props.fieldName, newArray);
  }
  doNothing = () => {
    // console.warn('Name remove at',index,'from',this.state)

    // newArray = (this.props.formObject.name)
    // newArray.splice(index, 1);
    // this.props.saveForm(this.props.fieldName, newArray);
  }


  render() {
    if(this.props.visitorCat == 'forgotId'){
      // this.props.saveForm(this.props.vistDate,(new Date()).toLocaleDateString());
    }
    if (this.props.fieldName == 'visitorName' && this.props.multipalNamesAllowed) {
      // console.warn('While rendering',this.props.formObject)
      return (
        
          <ReactChipsInput onBlur={(chips) => this.handleNameAdd()} handleNameRemove={this.handleNameRemove}  initialChips={this.props.formObject.visitorName} onChangeChips={(chips) => this.handleNameAdd(chips[chips.length - 1])} alertRequired={false} chipStyle={{ borderColor: '#008ba3', backgroundColor: '#00bcd4' }} />
       
      )
    } else {
      return (
        <View style={styles.inputFieldContainer}>
          <Text style={styles.label}>
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
            
          />
        </View>
      );
    }
  }
}

