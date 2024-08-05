import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header'; // Import the updated Header component
import Footer from './Footer'; // Import the Footer component

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import SearchScreen from './SearchScreen';
import ShopScreen from './ShopScreen';
import DealOfTheDayScreen from './DealOfTheDayScreen';
import CartScreen from './CartScreen'; // Ensure this path is correct
import ProfileScreen from './ProfileScreen'; // Ensure this path is correct

import AppLayout from './searchBar'; // Import the AppLayout component

const Stack = createStackNavigator();

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          header: () => <Header navigation={navigation} />, // Use the custom header here
          headerTitleAlign: 'center', // Center the header title
          headerStyle: {
            backgroundColor: '#fff', // Ensure header background color
          },
          headerTintColor: '#000', // Color for header text
        })}
      >
        <Stack.Screen name="Home">
          {props => (
            <AppLayout>
              <HomeScreen {...props} />
            </AppLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="About">
          {props => (
            <AppLayout>
              <AboutScreen {...props} />
            </AppLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="Search">
          {props => (
            <AppLayout>
              <SearchScreen {...props} onSearch={handleSearch} />
            </AppLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="Shop">
          {props => (
            <AppLayout>
              <ShopScreen {...props} searchQuery={searchQuery} />
            </AppLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="DealOfTheDay">
          {props => (
            <AppLayout>
              <DealOfTheDayScreen {...props} />
            </AppLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {props => (
            <AppLayout>
              <CartScreen {...props} />
            </AppLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {props => (
            <AppLayout>
              <ProfileScreen {...props} />
            </AppLayout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
