import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReuseComponents from './reuse'; // Adjust the import path as needed

const images = {
  slice: [
    { id: '1', uri: 'https://static.vecteezy.com/system/resources/previews/034/809/768/original/realistic-flying-tomato-slices-with-green-leaves-vector.jpg', name: 'Slice' }
  ],
  rectangle: [
    { id: '1', uri: 'https://static.vecteezy.com/system/resources/previews/030/788/676/large_2x/the-carrot-cut-into-long-small-pieces-high-resolution-ai-generative-photo.jpg', name: 'Rectangle' },
  ],
  dice: [
    { id: '1', uri: 'https://wholefully.com/wp-content/uploads/2021/02/diced-chopped-sliced-onions.jpg', name: 'Dice' },
  ],
};

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Category</Text>
      <View style={styles.imageContainer}>
        {Object.keys(images).map(category => (
          images[category].map(image => (
            <View key={image.id} style={styles.imageWrapper}>
              <ReuseComponents.ReusableImage source={{ uri: image.uri }} style={styles.image} />
              <Text style={styles.imageName}>{image.name}</Text>
            </View>
          ))
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  imageContainer: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageWrapper: {
    alignItems: 'center',
    margin: 10,
    width: '25%', // Adjust width for three images per row
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 80, // Adjust border radius as needed
  },
  imageName: {
    fontWeight:'bold',
    marginTop: 5,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    textAlign: 'center',
    width: '100%',
  },
});
