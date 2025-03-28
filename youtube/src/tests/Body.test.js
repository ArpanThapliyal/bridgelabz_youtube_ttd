import React from 'react';
import { render } from '@testing-library/react-native';
import Body from '../components/Body';

describe('Body Component', () => {
  it('should display category tabs', () => {
    const { getByText } = render(<Body />);
    expect(getByText('All')).toBeTruthy();
    expect(getByText('Music')).toBeTruthy();
    expect(getByText('Gaming')).toBeTruthy();
  });

  it('should render at least one known video title', () => {
    const { getByText } = render(<Body />);
    expect(getByText('Minecraft Hardcore 100 Days')).toBeTruthy();
  });
});
