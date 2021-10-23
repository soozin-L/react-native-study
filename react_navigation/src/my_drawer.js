import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Logo from './img/home.png';
import {CommonActions} from '@react-navigation/native';

class SilderDrawer extends Component {
  navigateToScreen = route => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imagecontainer}>
              <Image source={Logo} style={{width: 40, height: 40}} />
            </View>
            <Text>Section</Text>
            <View>
              <Text onPress={this.navigateToScreen('Home')}>Home</Text>
              <Text onPress={this.navigateToScreen('User')}>User</Text>
              <Text onPress={() => alert('Help')}>Help</Text>
              <Text onPress={() => alert('Info')}>Info</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingLeft: 20, paddingBottom: 20}}>
          <Text>corpyright @2020</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imagecontainer: {
    alignItems: 'center',
    padding: 50,
  },
});

export default SilderDrawer;
