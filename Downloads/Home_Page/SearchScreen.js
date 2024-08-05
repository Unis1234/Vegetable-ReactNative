import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ReuseComponents from './reuse'; // Adjust the import path as needed

export default function SearchScreen({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <ReuseComponents.ReusableTextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      <ReuseComponents.ReusableButton title="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
});
