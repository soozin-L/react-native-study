import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class DrawerHomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="TO User Screen"
          onPress={() => {
            this.props.navigation.navigate('User');
          }}
        />
      </View>
    );
  }
}

export default DrawerHomeScreen;
