// components/Settings.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Settings = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <View>
      <View style={[styles.sectionContainer, isDarkMode && styles.darkSectionContainer]}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>Profile</Text>
        <Text style={[styles.option, isDarkMode && styles.darkText]}>Manage User</Text>
      </View>

      <View style={[styles.sectionContainer, isDarkMode && styles.darkSectionContainer]}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>Settings</Text>
        <Text style={[styles.option, isDarkMode && styles.darkText]}>Notifications</Text>
        <TouchableOpacity
          style={[styles.darkModeButton, isDarkMode && styles.darkButton]}
          onPress={onToggleDarkMode}
        >
          <Text style={[styles.darkModeButtonText, isDarkMode && styles.darkButtonText]}>
            {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    width: 280,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  darkSectionContainer: {
    backgroundColor: '#444',
    borderColor: '#555',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 8,
  },
  option: {
    fontSize: 16,
    marginVertical: 4,
  },
  darkText: {
    color: '#ddd',
  },
  darkModeButton: {
    backgroundColor: '#666',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 15,
  },
  darkButton: {
    backgroundColor: '#888',
  },
  darkModeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Settings;
