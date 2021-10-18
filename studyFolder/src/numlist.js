/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NumList = props => {
  return props.num.map((item, index) => (
    <TouchableOpacity
      style={styles.numList}
      key={index}
      onPress={() => props.delete(index)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
});

export default NumList;
