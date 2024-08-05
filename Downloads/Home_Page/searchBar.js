import React, { createContext, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

// Create a context for the search query
export const SearchContext = createContext('');

export default function AppLayout({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={searchQuery}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => alert(`Searching for: ${searchQuery}`)} style={styles.iconContainer}>
            <Ionicons name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          {children}
        </ScrollView>
      </View>
    </SearchContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    padding: 10,
  },
  input: {
    flex: 1, // Take up available space
    borderColor: '#000000',
    borderWidth: 1,
    padding: 8,
    marginRight: 10, // Space between input and icon
    borderRadius: 15,
    backgroundColor: "#ffffff"
  },
  iconContainer: {
    padding: 5, // Adjust padding if needed
    borderColor: '#000000'
  },
  content: {
    flex: 1,
  },
});
