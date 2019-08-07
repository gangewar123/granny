import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

export default class Myform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="username"  style={styles.Input}/>
        <TextInput placeholder="password"  style={styles.Input}/>
        <TouchableOpacity style={styles.buttoncontainer}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
  },
Input:{
  height:40,
  backgroundColor: '#234564',
  paddingLeft: 10,
    marginBottom: 15,
},
buttoncontainer:{
  backgroundColor: '#27ae60',
},
buttontext:{
  textAlign:'center',
  paddingVertical:15,
  fontWeight: 'bold',
}
});
