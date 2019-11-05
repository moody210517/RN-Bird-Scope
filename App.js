import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Actions, Scene, Router, Stack } from 'react-native-router-flux';


import Login from './src/pages/login';
import Register from './src/pages/register';
import MyProfile from './src/pages/profile/MyProfile';
import AppView from './src/pages/AppView';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router>
          <Stack key="root" duration={0}>
            <Scene key="Login" hideNavBar={true} component={Login} title="Login" initial = {false} />       
            <Scene key="Register" hideNavBar={true} component={Register} title="Register" initial = {false} />  
            <Scene key="MyProfile" hideNavBar={true} component={MyProfile} title="MyProfile" initial = {false} />                              
            
            <Scene key="AppView" hideNavBar={true} component={AppView} title="AppView" initial = {true} />  
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
