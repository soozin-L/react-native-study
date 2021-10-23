import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class UserScreen extends Component {
  headerStyle = () => {
    this.props.navigation.setOptions({
      title: 'Custommizing',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green',
      },
      headerBackTitle: 'Cack',
      headerRight: () => (
        <Button
          title="Go Back"
          color="orange"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      ),
    });
  };

  render() {
    // 위의 선언해준 스타일 실행
    this.headerStyle();
    // 이 스크린의 루트값 할당, 홈스크린에서 보내준 값 할당, 루트에 패싱된 값이 있다면 값, 없다면 널
    // {params} 괄호 사용 이유 : params생략 후  값이 있을 경우 패싱값
    const {params} = this.props.route;
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Screen</Text>
        <Button
          title="TO Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
        <Text>User Idx {JSON.stringify(userIdx)}</Text>
        <Text>User Name {JSON.stringify(userName)}</Text>
        <Text>User LastName {JSON.stringify(userLastName)}</Text>
      </View>
    );
  }
}

export default UserScreen;
