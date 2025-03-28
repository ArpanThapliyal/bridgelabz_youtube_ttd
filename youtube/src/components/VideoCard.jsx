import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class VideoCard extends Component {
  render() {
    const { thumbnail, title, channel,channelImage, views } = this.props;

    return (
      <View style={styles.container}>
        {/* Thumbnail */}
        <Image
          testID="video-thumbnail"
          source={{ uri: thumbnail }}
          style={styles.thumbnail}
        />

        <View style={styles.infoRow}>
          {/* Channel Icon (placeholder or real avatar) */}
          <Image
            source={{ uri: channelImage }}
            style={styles.channelIcon}
          />

          {/* Text Info */}
          <View style={styles.textInfo}>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            <Text style={styles.channel}>{channel}</Text>
            <Text style={styles.views}>{views}</Text>
          </View>

          {/* More Options Icon (MaterialIcons) - if in screenshot */}
          <MaterialIcons
            name="more-vert"
            size={20}
            color="#fff"
            style={styles.moreIcon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    backgroundColor: '#333',
    resizeMode:'cover'
  },
  infoRow: {
    flexDirection: 'row',
    padding: 8,
  },
  channelIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#666',
    resizeMode:'cover'
  },
  textInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  channel: {
    color: '#aaa',
    fontSize: 14,
  },
  views: {
    color: '#aaa',
    fontSize: 12,
  },
  moreIcon: {
    marginLeft: 8,
    alignSelf: 'center',
  },
});
