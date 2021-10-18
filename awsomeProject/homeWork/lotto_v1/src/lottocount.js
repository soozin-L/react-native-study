/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LottoCount = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.lottoCount}>
        <Text style={styles.mainText}>추첨 횟수 : {props.lottoCount}</Text>
        <Text style={styles.mainText}>소비 금액 : {props.money}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
  },
  lottoCount: {
    padding: 10,
    backgroundColor: '#eaeaea',
  },
  mainText: {
    fontSize: 18,
  },
});
export default LottoCount;
