import React, { useState } from 'react';
import { View, Alert, StyleSheet, } from 'react-native';
import { ReusableText, ReusableTextInput, ReusableButton } from './Reusecomponent';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (!email.trim() || !isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Simulate sending OTP to email
    setTimeout(() => {
      Alert.alert('Success', 'OTP sent to your email.');
      navigation.navigate('OtpVerification', { email });
    }, 1000);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <ReusableText style={styles.label}>Forgot Password </ReusableText>
      <ReusableTextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        textAlign="center"
      />
      <View style={styles.buttonContainer}>
        <ReusableButton title="Send OTP" onPress={handleForgotPassword} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
      background: 'linear-gradient(180deg, #e0eafc, #ffffff)',
  },
  label: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default ForgotPasswordScreen;
