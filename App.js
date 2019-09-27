import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCodes: ZipCodeScreen
},{
  initialRouteName: 'Weather',
  initialRouteParams: {ZipCodes: '90110'}
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
 render() {
        return (
          <AppContainer/>
        );
    }
}