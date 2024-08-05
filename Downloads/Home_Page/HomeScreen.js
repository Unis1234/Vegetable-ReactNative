import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReuseComponents from './reuse'; // Adjust the import path as needed

export default function HomeScreen() {
  const navigation = useNavigation(); // Get the navigation object

  const onChanging = () => {
    navigation.navigate('About'); // Correct navigation method
  };

  return (
    <View style={styles.container}>
      <ReuseComponents.ReusableText style={styles.title}>Prep2Cook</ReuseComponents.ReusableText>
      <ReuseComponents.ReusableText style={styles.subtitle}>100% Healthy & Affordable</ReuseComponents.ReusableText>
      <ReuseComponents.ReusableText style={styles.freshText}>Fresh ready to cook</ReuseComponents.ReusableText>
      <ReuseComponents.ReusableTouchableOpacity onPress={onChanging} style={styles.button}>
        <ReuseComponents.ReusableText style={styles.buttonText}>Get Started</ReuseComponents.ReusableText>
      </ReuseComponents.ReusableTouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F3CA52',
    marginHorizontal: 20,
    borderRadius: 20,
    paddingBottom: 90,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  freshText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
