/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Input extends Component {
    state = {
        myTextInput: ''

    }

    // onChangeInput = (event) => {
    //     this.setState({
    //         myTextInput: event
    //     })
    // }
    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    render() {
        return (
            <View style={styles.mainView}>
                <TextInput
                    value={this.state.myTextInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                    maxLength={100}
                    autoCapitalize={'none'}
                    editaable={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%'
    },
    input: {
        width: '100%',
        backgroundColor: '#eaeaea',
        marginTop: 50,
        padding: 20
    }
});

export default Input;
