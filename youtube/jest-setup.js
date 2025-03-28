// jest-setup.js

// Mock expo-font so that it doesn’t actually load fonts in tests.
jest.mock('expo-font', () => ({
    loadAsync: jest.fn(),
    isLoaded: () => true,
  }));
  
  // Mock the MaterialIcons component to simply render a Text element
  // showing the icon name. This avoids running the real icon code.
  jest.mock('@expo/vector-icons/MaterialIcons', () => {
    const React = require('react');
    const { Text } = require('react-native');
    const MaterialIcons = (props) => {
      return React.createElement(Text, props, props.name);
    };
    return MaterialIcons;
  });
  