import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        {/* YouTube Logo Text */}
        <Text style={styles.logoText}>YouTube</Text>

        <View style={styles.iconsContainer}>
          {/* Cast Icon */}
          <MaterialIcons
            testID="cast-icon"
            name="cast"
            size={24}
            color="#fff"
            style={styles.icon}
          />

          {/* Notifications Icon */}
          <MaterialIcons
            testID="notifications-icon"
            name="notifications"
            size={24}
            color="#fff"
            style={styles.icon}
          />

          {/* Search Icon */}
          <MaterialIcons
            testID="search-icon"
            name="search"
            size={24}
            color="#fff"
            style={styles.icon}
          />

          {/* Profile Icon */}
          <MaterialIcons
            testID="profile-icon"
            name="account-circle"
            size={24}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logoText: {
    color: '#ff0000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 16,
  },
});
