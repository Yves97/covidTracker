import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';

//IMPORT CONFIG & DEPENDENCIES

//IMPORT SCREENS

//IMPORT COMPONENTS



class App extends Component {
  render() {
    return (
      <View  style={styles.main}>
        <Text>Hello from Covid Tracker App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
})

export default App;
