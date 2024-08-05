// screens/CommercialScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const commercialItems = [
  { id: '1', name: 'Carrot', price: '$3/kg', quantity: '1 kg', image: 'https://example.com/carrot.jpg' },
  { id: '2', name: 'Cabbage', price: '$2.5/kg', quantity: '1 kg', image: 'https://example.com/cabbage.jpg' },
  // Add more items here
];

export default function CommercialScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={commercialItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});
