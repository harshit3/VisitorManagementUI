import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

class VisitorPass extends Component {

    render() {
      const source = {uri:this.props.navigation.getParam('base64'),cache:true};
      return(
        <View style={styles.container}>
          <Pdf
            source={source}
            onLoadComplete={(numberOfPages,filePath)=>{
                console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages)=>{
                console.log(`current page: ${page}`);
            }}
            onError={(error)=>{
                console.log(error);
            }}
            style={styles.pdf}
        />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
  }
});

export default VisitorPass;