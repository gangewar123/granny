import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Myform from './Myform'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logocontainer}>
                    <Text> Login </Text>
                    <Image style={styles.logo} source={{ uri: 'https://payload.cargocollective.com/1/0/21154/8811319/Santa-to-portfolio.gif', }} />
                </View>
                <View style={styles.myform}>
                    <Myform />
                </View>
            </View>

        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
    },
    logocontainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        width: 100,
        height: 100,
    },
    myform: {
        flex: 3,
    }

})
