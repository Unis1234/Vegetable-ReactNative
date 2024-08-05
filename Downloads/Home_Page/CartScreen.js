import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReuseComponents from './reuse'; // Adjust the import path as needed

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <ReuseComponents.ReusableText>Cart Screen</ReuseComponents.ReusableText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
