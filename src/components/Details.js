import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

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
      <View>
        <TouchableHighlight onPress={this.navSecond}>
          <Text style={styles.back}>Back to the list</Text>
        </TouchableHighlight>
        <Text style={styles.fontSize}>Name: {this.props.name}</Text>
        <Text style={styles.fontSize}>Short name: {this.props.shortName}</Text>
        <Text style={styles.fontSize}>City: {this.props.city}</Text>
        <Text style={styles.fontSize}>Country: {this.props.country}</Text>
        <Text style={styles.fontSize}>URL: {this.props.url}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 22
  },
  back: {
    fontSize: 20,
    color: '#020202',
    paddingTop: 10,
    paddingBottom: 10
  }
});