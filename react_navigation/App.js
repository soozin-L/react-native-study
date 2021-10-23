/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from './src/user';
import HomeScreen from './src/home';
import LogoTitle from './src/logo';
import DrawerUserScreen from './src/user_drawer';
import DrawerHomeScreen from './src/home_drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import PictogramHome from './src/img/home.png';
import SilderDrawer from './src/my_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';

const Stack = createNativeStackNavigator(); // 화면이 랜더링 되는 부분에서 Stack.Navigater, Stack.Screen 사용

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('https://mywebsite.com/help')}
//         icon={() => <LogoTitle />}
//       />
//       <DrawerItem label="Info" onPress={() => alert('info window')} />
//     </DrawerContentScrollView>
//   );
// }

class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{width: 40, height: 40}}
  //       source={require('./src/img/home.png')}
  //     />
  //   );
  // };

  render() {
    return (
      // <NavigationContainer>
      //   <Tab.Navigator>
      //     <Tab.Screen name="Home" component={TabHomeScreen} />
      //     <Tab.Screen name="User" component={TabUserScreen} />
      //     <Tab.Screen name="Message" component={TabUserScreen} />
      //   </Tab.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            intiialRouteName: 'Home',
            drawerType: 'front',
            drawerPosition: 'right',
            drawerStyle: {
              backgroundColor: '#eaeaea',
              width: 240,
            },
            drawerActiveTintColor: 'red',
            drawerActiveBackgroundColor: 'skyblue',
          }}
          drawerContent={props => <SilderDrawer {...props} />}>
          <Drawer.Screen
            name="Home"
            component={DrawerHomeScreen}
            options={{
              drawerIcon: () => (
                <Image source={PictogramHome} style={{width: 40, height: 40}} />
              ),
            }}
          />
          <Drawer.Screen name="User" component={DrawerUserScreen} />
        </Drawer.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Stack.Navigator
      //     //initialRouteName 홈에 먼저 띄울
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#eaeaea',
      //       },
      //       headerTintColor: '#3ee',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: 'eaeaea',
      //       },
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         headerTitle: props => <LogoTitle {...props} />,
      //         headerRight: () => (
      //           <Button
      //             onPress={() => alert('This is a button!')}
      //             title="Info"
      //             color="#333"
      //           />
      //         ),
      //       }}
      //     />
      //     {/* <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         //headerTitle: props => <this.logoTitle {...props} />,
      //         headerTitle: props => <LogoTitle {...props} />,
      //         headerRight: () => {
      //           <Button
      //             title="Info"
      //             onPress={() => {
      //               alert('hello');
      //             }}
      //             color="orange"
      //           />;
      //         },
      //       }}
      //     /> */}
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       // 파라미터 초기화
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'dd',
      //         userLastName: 'go',
      //       }}
      //       // main에서 user style 설정 -> user.js에서  style 설정시 user style 먹음
      //       options={{
      //         title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'pink',
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple',
      //         },
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

export default App;
