import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Pressable } from 'react-native';

const FranchiseHomeScreen = ({ navigation }) => {
  const orders = [
    { id: '1', customer: 'John Doe', total: '₹450', status: 'Pending' },
    { id: '2', customer: 'Jane Smith', total: '₹350', status: 'Completed' },
    { id: '3', customer: 'Sam Wilson', total: '₹600', status: 'Pending' },
    // Add more sample orders as needed
  ];

  const handleViewOrder = (orderId) => {
    // Navigate to order details (implement OrderDetailScreen for this)
    navigation.navigate('OrderDetail', { orderId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Franchise Dashboard</Text>
      <Button title="Manage Products" onPress={() => navigation.navigate('ManageProducts')} />
      <Button title="View Customers" onPress={() => navigation.navigate('ViewCustomers')} />

      <Text style={styles.subtitle}>Recent Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.orderItem} onPress={() => handleViewOrder(item.id)}>
            <Text style={styles.orderText}>{`${item.customer} - ${item.total} (${item.status})`}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
        
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C',
    marginTop: 20,
    marginBottom: 10,
  },
  orderItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  orderText: {
    fontSize: 16,
  },
});

export default FranchiseHomeScreen;
