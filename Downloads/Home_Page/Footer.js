// Footer.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReuseComponents from './reuse'; // Adjust the import path as needed


export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      
      <ReuseComponents.ReusableText style={styles.appName}>Footer Section</ReuseComponents.ReusableText>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  iconContainer: {
    alignItems: 'center',
  },
});
