import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Actions, Scene, Router, Stack } from 'react-native-router-flux';


import Login from './src/pages/login';
import Register from './src/pages/register';
import ProfileContainer from './src/pages/profile/ProfileContainer';
import AppView from './src/pages/AppView';
import SettingContainer from './src/pages/setting/SettingContainer';
import VideoPlayer from './src/pages/home/VideoPlayer';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router>
          <Stack key="root" duration={0}>
                  
            <Scene key="Login" hideNavBar={true} component={Login} title="Login" initial = {true} />       
            
            <Scene key="Register" hideNavBar={true} component={Register} title="Register" initial = {false} />  
            
            <Scene key="AppView" hideNavBar={true} component={AppView} title="AppView" initial = {false} />  
            <Scene key="Profile" hideNavBar={true} component={ProfileContainer} title="Profile" initial = {false} />
            <Scene key="Setting" hideNavBar={true} component={SettingContainer} title="Setting" initial = {false} />

            <Scene key="VideoPlayer" hideNavBar={true} component={VideoPlayer} title="VideoPlayer" initial = {false} />

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
