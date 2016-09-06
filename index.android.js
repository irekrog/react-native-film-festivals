import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import ListFestivalView from './src/view/ListFestivalView';
import DetailsView from './src/view/DetailsView';


class MainActivity extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{activeScreen: 'listScreen'}}
        renderScene={MainActivity.navigatorRenderScene}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJump}
      />
    );
  }

  static navigatorRenderScene(route, navigator) {
    switch (route.activeScreen) {
      case 'listScreen':
        return (
          <ListFestivalView
            navigator={navigator}
            title="listScreen"
          />);
      case 'detailsScreen':
        return (
          <DetailsView
            navigator={navigator}
            title="detailsScreen"
            name={route.filmData.name}
            shortName={route.filmData.shortName}
            city={route.filmData.city}
            country={route.filmData.country}
            url={route.filmData.url}
          />);
    }
  }
}

AppRegistry.registerComponent('filmFestival', () => MainActivity);