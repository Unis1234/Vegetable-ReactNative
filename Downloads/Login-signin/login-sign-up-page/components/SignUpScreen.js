import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ReusableText, ReusableTextInput, ReusableButton } from './Reusecomponent';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(true);
  const [errors, setErrors] = useState({});

  const handleSignUp = () => {
    let valid = true;
    setErrors({});

    if (!firstName) {
      setErrors(prev => ({ ...prev, firstName: 'First Name is required.' }));
      valid = false;
    }
    if (!lastName) {
      setErrors(prev => ({ ...prev, lastName: 'Last Name is required.' }));
      valid = false;
    }
    if (!email || !isValidEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Valid Email is required.' }));
      valid = false;
    }
    if (!password || password.length < 8 || password.length > 12) {
      setErrors(prev => ({ ...prev, password: 'Password must be 8-12 characters long.' }));
      valid = false;
    }
    if (password !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
      valid = false;
    }

    if (valid) {
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('OtpVerification', { email });
    }
  };

  const toggleSecureTextEntryPassword = () => {
    setSecureTextEntryPassword(!secureTextEntryPassword);
  };

  const toggleSecureTextEntryConfirmPassword = () => {
    setSecureTextEntryConfirmPassword(!secureTextEntryConfirmPassword);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
  
      <ReusableText style={styles.main}>Welcome SignUp with e-mail or phone</ReusableText>
      <ReusableTextInput
        style={styles.input}
        placeholder=" Name *"
        value={firstName}
        onChangeText={setFirstName}
        textAlign="center"
      />
      {errors.Name ? <Text style={styles.error}>{errors.firstName}</Text> : null}
     
    
      <ReusableTextInput
        style={styles.input}
        placeholder="Email or Phone *"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        textAlign="center"
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password (8-12 characters) *"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntryPassword}
          textAlign="center"
        />
        <TouchableOpacity onPress={toggleSecureTextEntryPassword} style={styles.eyeIconContainer}>
          <Icon
            name={secureTextEntryPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>
      {errors.password ? <ReusableText style={styles.error}>{errors.password}</ReusableText> : null}
      <View style={styles.passwordContainer}>
        <TextInput
            style={styles.passwordInput}
          placeholder="Confirm Password *"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={secureTextEntryConfirmPassword}
          textAlign="center"
        />
       
        <TouchableOpacity onPress={toggleSecureTextEntryConfirmPassword} style={styles.eyeIconContainer}>
          <Icon
            name={secureTextEntryConfirmPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>
       <View>
         <ReusableTextInput
        style={styles.input}
        placeholder="OTP *"
        value={lastName}
        onChangeText={setLastName}
        textAlign="center"
      /></View>
      <ReusableTextInput
        style={styles.input}
        placeholder="Add delivery address"
        value={middleName}
        onChangeText={setMiddleName}
        textAlign="center"
      />
      {errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}
      <View style={styles.buttonContainer}>
        <ReusableButton title="Sign Up" onPress={handleSignUp} color="#4CAF50" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 30,
    textAlign: 'center',
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
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  first:{
   
    fontSize: 15,
  },
  main:{
    color:'blue',
    padding:'20px'
 
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
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default SignUpScreen;

