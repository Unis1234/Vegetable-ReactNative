// login.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ReusableText, ReusableButton, ReusableTextInput, ReusableImage } from './reuseComponent'; // Import reusable components

const LoginPage = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('HomePage'); // Navigate to HomePage on login
  };

  return (
    <View style={styles.container}>
      <ReusableImage
        source={{ uri: 'https://your-image-url-here.jpg' }} // Replace with an actual image URL or path
        style={styles.image}
      />
      <ReusableText style={styles.heading}>Login</ReusableText>
      <ReusableTextInput
        placeholder="Username"
        style={styles.input}
      />
      <ReusableTextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <ReusableButton
        title="Login"
        onPress={handleLogin}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  image: {
    marginBottom: 20,
  },
});

export default LoginPage;
