import React from 'react';
import { View,StyleSheet } from 'react-native';
import { ReusableText, ReusableButton } from './Reusecomponent';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ReusableText style={styles.text}>Welcome to the Home Screen!</ReusableText>
      <ReusableButton title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
