import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>textInComponent</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue"
    }
})
