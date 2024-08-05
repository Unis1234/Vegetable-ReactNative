import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ReusableText,  ReusableButton } from './Reusecomponent';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [animation] = useState(new Animated.Value(0));
  const [showSuccess, setShowSuccess] = useState(false);
  const [isEmail, setIsEmail] = useState(true);

  useEffect(() => {
    Animated.spring(animation, {
      toValue: 1,
      stiffness: 100,
      damping: 10,
      useNativeDriver: true,
    }).start();
  }, );

  const handleLogin = () => {
    if (!emailOrPhone.trim() || !password.trim()) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (isEmail && !isValidEmail(emailOrPhone)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (!isEmail && !isValidPhone(emailOrPhone)) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
      return;
    }

    if (password.length < 8 || password.length > 12) {
      Alert.alert('Error', 'Password must be between 8 and 12 characters long.');
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigation.navigate('Home');
    }, 1000);
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const toggleEmailPhone = () => {
    setIsEmail(!isEmail);
    setEmailOrPhone('');
  };

  return (
    <View style={styles.container}>
      {showSuccess ? (
        <View style={styles.successContainer}>
          <ReusableText style={styles.successMessage}>Login successful!</ReusableText>
        </View>
      ) : (
        <Animated.View style={[styles.loginForm, { transform: [{ scale: animation }] }]}>
          <TouchableOpacity onPress={toggleEmailPhone} style={styles.toggleButton}>
            <ReusableText style={styles.toggleText}>
              {isEmail ? 'Login with Phone Number' : 'Login with Email'}
            </ReusableText>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder={isEmail ? "Email *" : "Phone Number *"}
            value={emailOrPhone}
            onChangeText={setEmailOrPhone}
            keyboardType={isEmail ? "email-address" : "numeric"}
            autoCapitalize="none"
            textAlign="center"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password (8-12 characters) *"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              textAlign="center"
            />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIconContainer}>
              <Icon
                name={secureTextEntry ? 'eye-slash' : 'eye'}
                size={20}
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <ReusableButton title="Login" onPress={handleLogin} color="#4CAF50" />
          </View>
        </Animated.View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <ReusableText style={styles.link}>Forgot Password?</ReusableText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <ReusableText style={styles.link}>Don't have an account? Sign Up</ReusableText>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    // Adding a gradient background
    background: 'linear-gradient(180deg, #e0eafc, #ffffff)', // For React Native use a library like react-native-linear-gradient
  },
  loginForm: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
    // Adding a subtle border for better visual separation
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 30,
    textAlign: 'center',
    backgroundColor: '#f5f5f5', // Light background for input fields
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    height: 40,
    marginBottom: 12,
    borderRadius: 30,
    backgroundColor: '#f5f5f5', // Light background for password field
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  eyeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  link: {
    color: '#007bff', // Changed to a more noticeable color
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16, // Slightly larger text for links
  },
  successContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa7ad'
  },
  successMessage: {
    fontSize: 18,
    color: '#28a745', // Changed to a more noticeable color
    marginTop: 10,
  },
  toggleButton: {
    alignItems: 'center',
    marginBottom: 12,
  },
  toggleText: {
    color: '#007bff', // Consistent color with other links
    textDecorationLine: 'underline',
    
  },
});


export default LoginScreen;
