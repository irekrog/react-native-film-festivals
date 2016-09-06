import React, {Component} from 'react';
import {
  Text
} from 'react-native';

import {Container, Content, List, ListItem, Header, Title} from 'native-base';

export default class ListFestival extends Component {

  constructor(props) {
    super(props);

    this.navFirst = this.navFirst.bind(this);
    this.renderList = this.renderList.bind(this);
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
      filmData: {
        name: rowData.name,
        shortName: rowData.short_name,
        city: rowData.city,
        country: rowData.country,
        url: rowData.url
      }
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>
            Film Festivals
          </Title>
        </Header>
        <Content>
          <List dataArray={this.props.data}
                renderRow={this.renderList}/>
        </Content>
      </Container>
    );
  }
}