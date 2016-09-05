import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import ListFestival from './src/components/ListFestival';
import Details from './src/components/Details';


class MainActivity extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{activeScreen: 'listScreen'}}
        renderScene={MainActivity.navigatorRenderScene}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FadeAndroid}
      />
    );
  }

  static navigatorRenderScene(route, navigator) {
    switch (route.activeScreen) {
      case 'listScreen':
        return (
          <ListFestival
            navigator={navigator}
            title="listScreen"
          />);
      case 'detailsScreen':
        return (
          <Details
            navigator={navigator}
            title="detailsScreen"
            name={route.name}
            shortName={route.shortName}
            city={route.city}
            country={route.country}
            url={route.url}
          />);
    }
  }
}

AppRegistry.registerComponent('filmFestival', () => MainActivity);