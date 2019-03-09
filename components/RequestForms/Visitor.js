import React, { Component } from 'react';
import { BackHandler, Alert, TouchableOpacity, Text, View,ScrollView } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../../constants';
import InputField from './InputField'

export default class Visitor extends Component {
  state = {}
  formObject = {
    visitDate:(new Date()).toLocaleDateString(),
    loginId:'user123@infosys.com',
    visitorType: this.props.navigation.getParam('visitorType')
  }

  static navigationOptions = {
    title: 'Enter particulars below'
  }

  saveForm = (fieldName, fieldValue) => {
    // console.warn('This is  form parent', fieldName , fieldValue)
    this.formObject[fieldName] = fieldValue
    // console.warn('After seeting in parent', this.formObject)
    this.setState({
      formObject: this.formObject
    })
  }

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    // console.warn('Component will mount now')
    this.setState({
      fieldFocused: false
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  validateForm(formObject){
    keysPresent = Object.keys(formObject)
    keysExpected = []
    requestParameters[this.props.navigation.getParam('visitorType')].forEach((obj)=>{
      keysExpected.push(obj.fieldName)
    })
    console.log('Expected keys ',keysExpected)
    console.log('Present keys ',keysPresent)
    keysPresent.forEach((key)=>{
      if(keysExpected.includes(key)){
        console.log(key,' is present')
      }else{
        console.log(key,' is not there')
      }
    })
  }
  showAlert = () => {
    // console.warn('Please confirm')
    this.validateForm( this.state.formObject)
    Alert.alert(
      'Send form data',
      JSON.stringify(this.state.formObject),
      // this.state.name,
      [
        { text: 'Ops Forgot something', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

  };

  fieldFocused = (bol) => {
    // console.warn('Field focused called as',bol)
    this.setState({
      fieldFocused: bol
    })
  }
  handleBackButtonClick() {
    this.setState({
      fieldFocused: false
    })
  }

  render() {
    const visitorType = this.props.navigation.getParam('visitorType');
    return (
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.formBodyExpand}>
          {requestParameters[visitorType].map((field) => {
            return (
              <InputField
                {...field}
                saveForm={this.saveForm}
                fieldFocused={this.fieldFocused}
                formObject={this.formObject}
                visitorCat={visitorType}
              >
              </InputField>
            )
          })}
        </View>
        <TouchableOpacity
          style={styles.touch}
          onPress={this.showAlert}
        >

          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}