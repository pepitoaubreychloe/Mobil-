// App.js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Profile from './components/Profile';
import Settings from './components/Settings';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Profile
        imageSource={require('./Images/aubrey.jpg')} 
        name="Aubrey Chloe T. Pepito"
        joined="BSIT - 3R7"
        isDarkMode={isDarkMode}
      />
      <Settings isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#222',
  },
});
