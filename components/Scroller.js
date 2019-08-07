import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Login from './Login';

export default class Scroller extends Component {
    render() {
        return (
            <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
                <View style={styles.outer}>
                    <Text style={styles.innerText}> This is my </Text>
                </View>
                <View style={[styles.outer, styles.green]}>
                    <Text style={styles.innerText}> first  </Text>
                </View>
                <View style={[styles.outer, styles.red]}>
                    <Text style={styles.innerText}> last </Text>
                </View>
                <View style={styles.outer}>
                    <Login />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    outer: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height

    },
    innerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff'
    },
    red: {
        backgroundColor: '#dd4b39',
    },
    green: {
        backgroundColor: '#27ae60',
    }
});
