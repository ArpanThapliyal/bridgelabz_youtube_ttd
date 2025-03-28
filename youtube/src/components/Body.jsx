import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import VideoCard from './VideoCard';

export default class Body extends Component {
  render() {
    const categories = ['All', 'Music', 'Gaming', 'Mixes', 'Playlists','Impractical jokers', 'Bouldering','AI','Minecraft modding'];

    // Hardcode some videos from your screenshot
    const videos = [
      {
        thumbnail: 'https://i.ytimg.com/vi/WePo4Lx8DPI/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLAWFbDt2Yyy8XVDVuF3iI75O647Ow',
        title: 'Minecraft Hardcore 100 Days',
        channel: 'disruptive builds',
        channelImage:'https://i.ytimg.com/vi/WePo4Lx8DPI/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLAWFbDt2Yyy8XVDVuF3iI75O647Ow',
        views: '3.4 lakh views',
      },
      {
        thumbnail: 'https://i.ytimg.com/vi/h_fdPgjp4bI/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCdDUNHIBw0Laz0fJWzLBwGakYchg',
        title: 'Why Oil Nations Hate India?',
        channel: 'Think School',
        channelImage:'https://i.ytimg.com/vi/h_fdPgjp4bI/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCdDUNHIBw0Laz0fJWzLBwGakYchg',
        views: '9.7 lakh views',
      },
      {
        thumbnail: 'https://i.ytimg.com/vi/AZ_eiVs91_I/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLC40jo4i8s66wGjm9D10dwp9Ci-cw',
        title: 'Can Modi KILL the OIL Mafia? | Geopolitical Case Study',
        channel: 'Think School',
        channelImage:'https://i.ytimg.com/vi/AZ_eiVs91_I/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLC40jo4i8s66wGjm9D10dwp9Ci-cw',
        views: '5.3 lakh views',
      },
    ];

    return (
      <View style={styles.container}>
        {/* Category Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Video List */}
        <ScrollView style={styles.videoList} showsVerticalScrollIndicator={false}>
          {videos.map((vid, idx) => (
            <VideoCard
              key={idx}
              thumbnail={vid.thumbnail}
              title={vid.title}
              channel={vid.channel}
              channelImage={vid.channelImage}
              views={vid.views}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  categoryContainer: {
    marginVertical: 8,
    paddingHorizontal: 5,
  },
  categoryButton: {
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  categoryText: {
    color: '#fff',
    fontSize: 15,
  },
});
