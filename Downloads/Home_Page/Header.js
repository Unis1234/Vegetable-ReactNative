import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReuseComponents from './reuse'; // Adjust the import path as needed
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <ReuseComponents.ReusableTouchableOpacity onPress={() => navigation.navigate('Home')} ><ReuseComponents.ReusableText style={styles.appName} onPress={() => navigation.navigate('Home')}>Prep2Cook</ReuseComponents.ReusableText></ReuseComponents.ReusableTouchableOpacity>
      <View style={styles.buttonsContainer}>
        <ReuseComponents.ReusableTouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <ReuseComponents.ReusableText></ReuseComponents.ReusableText>
        </ReuseComponents.ReusableTouchableOpacity>
        <ReuseComponents.ReusableTouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
          <ReuseComponents.ReusableText>Shop</ReuseComponents.ReusableText>
        </ReuseComponents.ReusableTouchableOpacity>
        <ReuseComponents.ReusableTouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.button}>
          <ReuseComponents.ReusableText>Category</ReuseComponents.ReusableText>
        </ReuseComponents.ReusableTouchableOpacity>
        <ReuseComponents.ReusableTouchableOpacity onPress={() => navigation.navigate('DealOfTheDay')} style={styles.button}>
          <ReuseComponents.ReusableText>Deal's Day</ReuseComponents.ReusableText>
        </ReuseComponents.ReusableTouchableOpacity>
        <ReuseComponents.ReusableTouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.button}>
          <Ionicons name="cart" size={25} color="black" />
        </ReuseComponents.ReusableTouchableOpacity>
        <ReuseComponents.ReusableTouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
          <Ionicons name="person" size={25} color="black" />
        </ReuseComponents.ReusableTouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between appName and buttonsContainer
    alignItems: 'center', // Center items vertically
    paddingVertical: 15, // Adjust vertical padding
    paddingTop:50,
    paddingHorizontal: 12, // Adjust horizontal padding
    backgroundColor: '#E0E5B6',
  },
  appName: {
    fontSize: 17, // Adjust the font size as needed
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 3, // Adjust spacing between buttons
  },
});
