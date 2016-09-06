import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import {Container, Header, Title, Content, Button, Icon, List, ListItem} from 'native-base';

export default class Details extends Component {

  constructor(props) {
    super(props);
    this.navSecond = this.navSecond.bind(this);
  }

  navSecond() {
    this.props.navigator.pop({
      activeScreen: 'detailsScreen'
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={this.navSecond}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>
            Festival details
          </Title>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>{this.props.name}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.shortName}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.city}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.country}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.url}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}