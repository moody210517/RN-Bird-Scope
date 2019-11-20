/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { colors, fonts } from '../../styles';

import ScoreScreen from '../score/Score';
import HomeScreen from '../home/Home';
import Profile from '../profile/ProfileContainer';
import SettingScreen from '../setting/SettingContainer';

const weatherIcon = require('../../../assets/menu/menu-weather-icon.png');
const scoreICon = require('../../../assets/menu/menu-score-icon.png');
const homeIcon = require('../../../assets/menu/menu_home.png');
const profileIcon = require('../../../assets/menu/menu-profile-icon.png');
const settingIcon = require('../../../assets/menu/menu-setting-icon.png');

const hederBackground = require('../../../assets/back-image.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});



export default createBottomTabNavigator(
  {
    Weather: {
      screen: HomeScreen,
      navigationOptions: {        
        header: {
          visible: false,
        },
      },
    },
    Score: {
      screen: ScoreScreen,
      navigationOptions: {      
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Grids</Text>
          </View>
        ),
      },
    },  
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Grids</Text>
          </View>
        ),
      },
    },        
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        title: 'React adsfsdf Starter',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1
             
            }}
            source={hederBackground}
            resizeMode="cover"
          />
        ),
      }),

    },  
    Setting: {
      screen: SettingScreen,
      navigationOptions: () => ({
        title: 'React Native',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1              
            }}
            source={hederBackground}
            resizeMode="cover"
          />
        ),
      }),


    },  
  },
  // header option
  
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Weather':
            iconSource = weatherIcon;
            break;
          case 'Score':
            iconSource = scoreICon;
            break;
          case 'Home':
                iconSource = homeIcon;
                break;      
          case 'Profile':
              iconSource = profileIcon;
              break;       
          case 'Setting':
              iconSource = settingIcon;
              break;         
          default:
            iconSource = homeIcon;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),

    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 0.7,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  },
);
