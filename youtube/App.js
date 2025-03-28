import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* StatusBar is optional, keep it if you want */}
        <StatusBar style="auto" />
        
        {/* HEADER */}
        <Header />

        {/* BODY */}
        <Body />

        {/* FOOTER */}
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
