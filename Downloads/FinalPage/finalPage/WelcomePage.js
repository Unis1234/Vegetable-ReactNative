// WelcomePage.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { ReusableText, ReusableTextInput, ReusableDropdown, ReusableCheckbox, ReusableButton } from './reuseComponent';

const WelcomePage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedVegetable, setSelectedVegetable] = useState('');
  const [cutTypes, setCutTypes] = useState({
    slice: false,
    rectangle: false,
    dice: false,
  });

  const handleShowSelection = () => {
    const cutTypeSelections = Object.keys(cutTypes)
      .filter(key => cutTypes[key])
      .join(', ');

    Alert.alert(
      'Selected Data',
      `Name: ${name}\nVegetable: ${selectedVegetable}\nCut Types: ${cutTypeSelections}`
    );
  };

  return (
    <View style={styles.container}>
      <ReusableText style={styles.heading}>Welcome</ReusableText>
      <ReusableTextInput placeholder="Enter your name" value={name} onChangeText={setName} style={styles.input} />
      <ReusableDropdown
        selectedValue={selectedVegetable}
        onValueChange={setSelectedVegetable}
        items={[
          { label: 'Carrot', value: 'carrot' },
          { label: 'Potato', value: 'potato' },
          { label: 'Onion', value: 'onion' },
        ]}
        style={styles.dropdown}
      />
      <ReusableCheckbox
        isChecked={cutTypes.slice}
        onChange={() => setCutTypes(prev => ({ ...prev, slice: !prev.slice }))}
        label="Slice"
        style={styles.checkbox}
      />
      <ReusableCheckbox
        isChecked={cutTypes.rectangle}
        onChange={() => setCutTypes(prev => ({ ...prev, rectangle: !prev.rectangle }))}
        label="Rectangle"
        style={styles.checkbox}
      />
      <ReusableCheckbox
        isChecked={cutTypes.dice}
        onChange={() => setCutTypes(prev => ({ ...prev, dice: !prev.dice }))}
        label="Dice"
        style={styles.checkbox}
      />
      <ReusableButton title="Show Selection" onPress={handleShowSelection} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  dropdown: {
    marginVertical: 10,
  },
  checkbox: {
    marginVertical: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default WelcomePage;
