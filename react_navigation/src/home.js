import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="to user"
          onPress={() => {
            // 유저 스크린으로 보낼 데이터, 이자 파라미터로
            // 버튼을 누르면 파라미터 초기화
            this.props.navigation.navigate('User', {
              userIdx: 1,
              userName: 'GilDong',
              userLastName: 'hong',
            });
          }}
        />
        <Button
          title=" Change The Title "
          onPress={() => {
            this.props.navigation.setOptions({
              title: 'Changed!!',
              headerStyle: {
                backgroundColor: 'pink',
              },
              headerTintColor: 'red',
            });
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
