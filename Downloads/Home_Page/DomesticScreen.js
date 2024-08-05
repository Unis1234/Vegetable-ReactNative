// screens/DomesticScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const domesticItems = [
  { id: '1', name: 'Tomato', price: '$2/kg', quantity: '1 kg', image: 'https://example.com/tomato.jpg' },
  { id: '2', name: 'Potato', price: '$1/kg', quantity: '1 kg', image: 'https://example.com/potato.jpg' },
  // Add more items here
];

export default function DomesticScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={domesticItems}
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
