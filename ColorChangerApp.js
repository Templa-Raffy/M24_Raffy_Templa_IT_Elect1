import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="white" onPress={() => setBgColor('white')} />
      <Button title="Light Blue" onPress={() => setBgColor('Light Blue')} />
      <Button title="Light Green" onPress={() => setBgColor('Light Green')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 10, padding: 20 },
});

export default ColorChangerApp;