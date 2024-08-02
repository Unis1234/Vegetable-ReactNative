import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Validation Error', 'Please enter your email address.');
      return;
    }

    // Add logic to send password reset instructions to the provided email
    console.log('Reset link sent to:', email);

    // Navigate back to the login screen or show a success message
    navigation.navigate('FranchiseLogin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={!showPassword}
        />
        <Icon
          name={showPassword ? 'visibility' : 'visibility-off'}
          size={24}
          color="#388E3C"
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        />
      </View>
      <Button title="Submit" onPress={handleResetPassword} />
      <Text style={styles.backText} onPress={() => navigation.navigate('FranchiseLogin')}>
        Back to Login
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
    bordercolor:'black',
    
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
  passwordContainer: {
    position: 'relative',
    
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  backText: {
    marginTop: 20,
    color: '#388E3C',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
