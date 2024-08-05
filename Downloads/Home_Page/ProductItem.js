// components/ProductItem.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProductItem = ({ uri }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default ProductItem;
