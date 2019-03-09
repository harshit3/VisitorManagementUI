import React, { Component } from 'react';
import { BackHandler, Alert, TouchableOpacity, Text, View,ScrollView } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../../constants';
import InputField from './InputField'

export default class Visitor extends Component {
  state = {}
  formObject = {}

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
  showAlert = () => {
    // console.warn('Please confirm')
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
        { text: 'OK', onPress: () => {
          console.log(this.state.formObject)
          fetch('http://192.168.43.77:8080/visitors',{
            method: 'POST',
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify(this.state.formObject)
          })
          .then(response => response.text())
          .then(data => console.log(data))
          .catch(error => console.log(error))
        } },
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
                key={field.fieldName}
                {...field}
                saveForm={this.saveForm}
                fieldFocused={this.fieldFocused}
                formObject={this.formObject}
              >
              </InputField>
            )
          })}
        </View>
        <TouchableOpacity onPress={this.onPressButton}
          style={styles.touch}
          onPress={this.showAlert}
        >

          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}