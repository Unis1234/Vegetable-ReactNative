import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import ReuseComponents from './reuse'; // Adjust the import path as needed
import { SearchContext } from './searchBar'; // Import the SearchContext

const domesticItems = [
  { id: '1', name: 'Tomato', price: '16', quantity: '200 gm', image: 'https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?w=740&t=st=1722808862~exp=1722809462~hmac=6b972ced383fae6036ce0642828af2d9a62330b003be85fbdeea8a7ee3dfd2b1' },
  { id: '2', name: 'Onion', price: '20', quantity: '200 gm', image: 'https://img.freepik.com/premium-photo/slices-shallot-onions-white-space_147493-1120.jpg?w=900' },
  { id: '3', name: 'Potato', price: '15', quantity: '200 gm', image: 'https://img.freepik.com/premium-photo/potatoes-fresh-natural-potatoes-isolated-sliced-potatoes_121234-17.jpg?w=900' },
  { id: '4', name: 'Ladyfinger', price: '18', quantity: '200 gm', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/5/o/z/50-vvw-hybrid-green-bhindi-okra-ladyfinger-seeds-50-seeds-af18-original-imagjre37yhr7htm.jpeg?q=90&crop=false' },
];

const commercialItems = [
  { id: '1', name: 'Mixture of all Vegetables', price: '200', quantity: '1 kg', image: 'https://wallpapers.com/images/hd/vegetables-pictures-qs8trfk65nvldcyr.jpg' },
  { id: '2', name: 'Mixture of all Vegetables', price: '200', quantity: '1 kg', image: 'https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=DZy1JMfUBkllwiq1Fm_LXtxA4DMDnExuF40jD8u9Z0Q=' },
  { id: '3', name: 'Mixture of all Vegetables', price: '200', quantity: '1 kg', image: 'https://www.azernews.az/media/pictures/o-GROCERY-SHOPPING-TIP-VEGETABLE-VEGETABLES-HEALTHY-facebook.jpg' },
  { id: '4', name: 'Mixture of all Vegetables', price: '200', quantity: '1 kg', image: 'https://media.licdn.com/dms/image/D5612AQHJXE8q9D8IYA/article-cover_image-shrink_720_1280/0/1678695465746?e=2147483647&v=beta&t=WqL8m4_UUf4zY1iRaSltnt9-hhNQK9kob2yt2pgRBRA' },
];

export default function AboutScreen() {
  const [selectedCategory, setSelectedCategory] = useState('domestic');
  const searchQuery = useContext(SearchContext); // Use the search query from the context

  const filterItems = (items) => {
    return items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const renderItems = (items) => (
    <View style={styles.grid}>
      {filterItems(items).map((item) => (
        <View key={item.id} style={styles.itemBox}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <Text style={styles.itemPrice}>₹ {item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.radioContainer}>
        <View style={styles.radioButtonWrapper}>
          <ReuseComponents.ReusableRadioButton
            selectedValue={selectedCategory}
            onSelect={setSelectedCategory}
            value="domestic"
            label="Domestic"
          />
        </View>
        <View style={styles.radioButtonWrapper}>
          <ReuseComponents.ReusableRadioButton
            selectedValue={selectedCategory}
            onSelect={setSelectedCategory}
            value="commercial"
            label="Commercial"
          />
        </View>
      </View>
      {selectedCategory === 'domestic' && (
        <>
          {renderItems(domesticItems)}
          <Text style={styles.orderInfo}>Minimum Value of the order will be Rs.350</Text>
        </>
      )}
      {selectedCategory === 'commercial' && (
        <>
          {renderItems(commercialItems)}
          <Text style={styles.orderInfo}>More than 1kg orders should be accepted here</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioButtonWrapper: {
    marginHorizontal: 10, // Gap between radio buttons
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  itemTextContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  orderInfo: {
    color:'red',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});
