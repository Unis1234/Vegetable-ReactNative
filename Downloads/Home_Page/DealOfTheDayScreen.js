import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReuseComponents from './reuse'; // Adjust the import path as needed

export default function DealOfTheDayScreen() {
  return (
    <View style={styles.container}>
      <ReuseComponents.ReusableImage 
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/029/326/729/non_2x/illustration-limited-time-super-sale-banner-vector.jpg' }}
        style={styles.dealImage}
        resizeMode="contain"
      />
      {/* Add deal of the day content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    paddingBottom:400,
    backgroundColor: '#fff', // Adjust background color as needed
  },
  dealImage: {
    width: 400,
    height: 250, // Adjust height as needed
  },
});
