import React from 'react';
import { render } from '@testing-library/react-native';
import VideoCard from '../components/VideoCard';

describe('VideoCard Component', () => {
  it('should display the video thumbnail image', () => {
    const { getByTestId } = render(
      <VideoCard
        title="Test Video"
        channel="Test Channel"
        views="123K views"
        thumbnail="test-thumbnail-url"
      />
    );
    expect(getByTestId('video-thumbnail')).toBeTruthy();
  });

  it('should display the video title, channel, and views', () => {
    const { getByText } = render(
      <VideoCard
        title="Minecraft Hardcore 100 Days"
        channel="disruptive builds"
        views="3.4 lakh views"
        thumbnail="some-url"
      />
    );
    expect(getByText('Minecraft Hardcore 100 Days')).toBeTruthy();
    expect(getByText('disruptive builds')).toBeTruthy();
    expect(getByText('3.4 lakh views')).toBeTruthy();
  });
});
