import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Footer Section</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
    fontSize: 14,
  },
});
