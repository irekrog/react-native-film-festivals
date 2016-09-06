import React, {Component} from 'react';
import {
  View
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import ListFestival from '../component/ListFestival';
import ErrorScreen from '../component/ErrorScreen';

export default class ListFestivalView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      visible: false,
      network: true
    };
  }

  componentDidMount() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const url = 'http://irekrog.pl/film-festival.json';

    fetch(url)
      .then((r) => r.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson.festivals
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          network: false
        });
      })
      .done();
  }


  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1}}>
          <Spinner visible={this.state.visible}/>
        </View>
      );
    }
    else if ((!this.state.loading) && (!this.state.network)) {
      return (
        <ErrorScreen />
      );
    }
    else {
      return (
        <ListFestival data={this.state.dataSource} navigator={this.props.navigator}/>
      );
    }
  }
}