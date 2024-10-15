// components/Avatar.js
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = ({ imageSource }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={imageSource} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
  },
});

export default Avatar;
