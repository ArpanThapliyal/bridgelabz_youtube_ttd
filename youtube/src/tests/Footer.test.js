import React from 'react';
import { render } from '@testing-library/react-native';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('should display a simple footer text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Footer Section')).toBeTruthy();
  });
});
