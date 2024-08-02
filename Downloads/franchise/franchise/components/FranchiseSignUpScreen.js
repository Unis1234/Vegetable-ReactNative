import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const FranchiseSignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add sign-up logic here (e.g., API call)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Navigate to FranchiseLoginScreen after successful sign-up
    navigation.navigate('FranchiseLogin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Franchise Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text style={styles.loginText} onPress={() => navigation.navigate('FranchiseLogin')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#bcc4c3',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
  
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  loginText: {
    marginTop: 20,
    color: '#388E3C',
    fontSize: 16,
  },
});

export default FranchiseSignUpScreen;
