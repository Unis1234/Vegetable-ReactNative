2// reuse.js
import React from 'react';
import { Text, Image, Button, TextInput, StyleSheet, TouchableOpacity, View, CheckBox } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

// Reusable Text Component
export const ReusableText = ({ children, style }) => {
  return <Text style={[styles.defaultText, style]}>{children}</Text>;
};

// Reusable Image Component
export const ReusableImage = ({ source, style }) => {
  return <Image source={source} style={[styles.defaultImage, style]} />;
};

// Reusable TouchableOpacity Component
export const ReusableTouchableOpacity = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

// Reusable Button Component
export const ReusableButton = ({ title, onPress, style }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      color={style?.backgroundColor}
    />
  );
};

// Reusable TextInput Component
export const ReusableTextInput = ({ placeholder, secureTextEntry, style, value, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.defaultInput, style]}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

// Reusable Checkbox Component
export const ReusableCheckbox = ({ isChecked, onChange, label, style }) => {
  return (
    <View style={[styles.checkboxContainer, style]}>
      <CheckBox
        value={isChecked}
        onValueChange={onChange}
        style={styles.checkbox}
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

// Reusable Dropdown Component
export const ReusableDropdown = ({ selectedValue, onValueChange, items, style }) => {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={[styles.dropdown, style]}
    >
      {items.map((item, index) => (
        <Picker.Item key={index} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: '#000',
  },
  defaultImage: {
    width: 100,
    height: 100,
  },
  defaultInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  label: {
    marginLeft: 8,
  },
  dropdown: {
    height: 40,
    width: '100%',
  },
});

export default {
  ReusableText,
  ReusableImage,
  ReusableTouchableOpacity,
  ReusableButton,
  ReusableTextInput,
  ReusableCheckbox,
  ReusableDropdown,
};
