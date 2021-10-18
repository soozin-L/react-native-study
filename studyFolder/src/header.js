/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const Header = (props) => (
    <TouchableOpacity style={styles.header}
        //onPress={()=> alert('hello')}
        //onLongPress={()=> alert('hello')}
        //onPressIn={()=> alert('hello')}
        onPressOut={() => alert('hello')}>

        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 10,
        width: '100%'

    },
})

export default Header;