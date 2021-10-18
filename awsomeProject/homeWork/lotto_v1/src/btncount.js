/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BtnCount = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.flexBox}>
        <Text
          style={[styles.btn, {backgroundColor: 'powderblue'}]}
          onPress={() => alert('자동 5회 \n' + props.selectNum(5) + `</View>`)}>
          자동 5회
        </Text>
        <Text
          style={[
            styles.btn,
            {backgroundColor: 'skyblue', marginHorizontal: '2%'},
          ]}
          onPress={() => alert('자동 10회\n' + props.selectNum(10))}>
          자동 10회
        </Text>
        <Text
          style={[styles.btn, {backgroundColor: 'powderblue'}]}
          onPress={() => alert('자동 50회\n' + props.selectNum(50))}>
          자동 50회
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
  },
  flexBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    minWidth: '32%',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    fontSize: 18,
  },
});

export default BtnCount;
