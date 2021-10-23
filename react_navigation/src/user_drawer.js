import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class DrawerUserScreen extends Component {
  //drawerStyle = () =

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Screen</Text>
        <Button
          title="TO Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default DrawerUserScreen;
