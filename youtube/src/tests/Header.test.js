import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../components/Header';

describe('Header Component', () => {
  it('should display the YouTube logo text', () => {
    const { getByText } = render(<Header/>);
    expect(getByText('YouTube')).toBeTruthy();
  });

  it('should display a cast icon (MaterialIcons)', () => {
    const { getByTestId } = render(<Header/>);
    expect(getByTestId('cast-icon')).toBeTruthy();
  });

//   it('should display a notifications icon (MaterialIcons)', () => {
//     const { getByTestId } = render(<Header/>);
//     expect(getByTestId('notifications-icon')).toBeTruthy();
//   });

//   it('should display a search icon (MaterialIcons)', () => {
//     const { getByTestId } = render(<Header/>);
//     expect(getByTestId('search-icon')).toBeTruthy();
//   });

//   it('should display a profile icon (MaterialIcons)', () => {
//     const { getByTestId } = render(<Header/>);
//     expect(getByTestId('profile-icon')).toBeTruthy();
//   });

});
