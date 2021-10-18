/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ResultView = props => {
  // let = bgColor

  // if (item <= 10) {
  //     bgColor = 'yellow';
  // } else if (item <= 20) {
  //     bgColor = 'blue';
  // } else if (item <= 30) {
  //     bgColor = 'red';
  // } else if (item <= 40) {
  //     bgColor = 'gray';
  // } else {
  //     bgColor = 'green';
  // }
  // return (bgColor)

  return (
    <View style={styles.resultView}>
      <ScrollView onMomentumScrollBegin={() => props.selectNum(1)}>
        <Text style={styles.mainText}>{props.lottoCount} 회 당첨결과</Text>
        <View style={styles.flexBox}>
          {props.selectNumArr.map((item, index) => (
            <Text style={styles.box} key={index}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  resultView: {
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 5,
  },
  flexBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    minWidth: '32%',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 50,
    margin: 2,
    borderRadius: 4,
    fontSize: 18,
    backgroundColor: '#ccc',
  },
});

export default ResultView;
