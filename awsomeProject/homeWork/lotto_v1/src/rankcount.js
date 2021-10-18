/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Rankcount = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.rankCount}>
        <Text style={styles.mainText}>당첨횟수</Text>
        <View style={styles.flexBox}>
          <Text style={styles.box}>1등: {props.rank1} </Text>
          <Text style={styles.box}>2등: {props.rank2} </Text>
          <Text style={styles.box}>3등: {props.rank3} </Text>
          <Text style={styles.box}>4등: {props.rank4} </Text>
          <Text style={styles.box}>5등: {props.rank5} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
  },
  rankCount: {
    padding: 10,
    backgroundColor: '#eaeaea',
  },
  mainText: {
    fontSize: 18,
  },
  flexBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    minWidth: '44%',
    marginHorizontal: '2%',
    alignSelf: 'flex-start',
    fontSize: 18,
  },
});

export default Rankcount;
