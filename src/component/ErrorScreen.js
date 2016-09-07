import React, {Component} from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

import HelloWorld from './HelloWorld';

import {Container, Content, Header, Title} from 'native-base';

export default class ListFestival extends Component {


  render() {
    return (
      <Container>
        <Header>
          <Title>
            Film Festivals
          </Title>
        </Header>
        <Content>
          <Text style={styles.error}>Error. Check the internet connection or try again later.</Text>
       		<Text onPress={() => this.handlerClick()}>Test</Text>
        </Content>
      </Container>
    );
  }

  handlerClick() {
  		HelloWorld.greeting("Test");
  }
}




const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  }
});