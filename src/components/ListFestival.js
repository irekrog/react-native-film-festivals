import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import {Container, Content, List, ListItem, Header, Title} from 'native-base';

export default class ListFestival extends Component {

  constructor(props) {
    super(props);

    this.navFirst = this.navFirst.bind(this);
    this.renderList = this.renderList.bind(this);

    this.state = {
      loading: true,
      visible: false,
      dataFilms: null
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
        console.log(responseJson.menu);
        this.setState({
          loading: false,
          dataSource: responseJson.festivals
        });
      })
      .done();
  }


  renderList(rowData) {
    return (
      <ListItem button onPress={() => this.navFirst(rowData)}>
        <Text>{rowData.name}</Text>
      </ListItem>
    );
  }

  navFirst(rowData) {
    this.props.navigator.push({
      activeScreen: 'detailsScreen',
      name: rowData.name,
      shortName: rowData.short_name,
      city: rowData.city,
      country: rowData.country,
      url: rowData.url

    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1}}>
          <Spinner visible={this.state.visible}/>
        </View>
      );
    }
    else {
      return (
        <Container>
          <Header>
            <Title>
              Film Festivals
            </Title>
          </Header>
          <Content>
            <List dataArray={this.state.dataSource}
                  renderRow={this.renderList}/>
          </Content>
        </Container>
      );
    }
  }
}