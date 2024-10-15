// components/Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = ({ imageSource, name, joined, isDarkMode }) => {
  return (
    <View style={[styles.profileContainer, isDarkMode && styles.darkProfileContainer]}>
      <Image source={imageSource} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={[styles.name, isDarkMode && styles.darkText]}>{name}</Text>
        <Text style={[styles.joined, isDarkMode && styles.darkText]}>Joined {joined} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  darkProfileContainer: {
    backgroundColor: '#333',
    borderColor: '#444',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    marginRight: 20,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  joined: {
    color: '#666',
    fontSize: 16,
    marginTop: 5,
  },
  darkText: {
    color: '#ddd',
  },
});

export default Profile;
