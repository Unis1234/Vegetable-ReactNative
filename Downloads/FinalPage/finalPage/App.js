// App.js
import {React, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import LoginPage from './LoginPage';
import { ReusableText, ReusableImage, ReusableButton, ReusableCheckbox, ReusableDropdown } from './reuseComponent';

const Stack = createStackNavigator();

// HomePage Component
const HomePage = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('carrot');
  const [selectedOptions, setSelectedOptions] = useState({
    slice: false,
    rectangle: false,
    dices: false,
  });

  const handleCheckboxChange = (type) => {
    setSelectedOptions(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <View style={styles.container}>
      <ReusableText style={styles.message}>Welcome to the Home Page!</ReusableText>

      <ReusableDropdown
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        items={[
          { label: 'Carrot', value: 'carrot' },
          { label: 'Tomato', value: 'tomato' },
          { label: 'Cucumber', value: 'cucumber' },
        ]}
        style={styles.dropdown}
      />

      <View style={styles.checkboxContainer}>
        <ReusableCheckbox
          isChecked={selectedOptions.slice}
          onChange={() => handleCheckboxChange('slice')}
          label="Slice"
        />
        <ReusableCheckbox
          isChecked={selectedOptions.rectangle}
          onChange={() => handleCheckboxChange('rectangle')}
          label="Rectangle"
        />
        <ReusableCheckbox
          isChecked={selectedOptions.dices}
          onChange={() => handleCheckboxChange('dices')}
          label="Dices"
        />
      </View>

      <ReusableButton
        title="Submit"
        onPress={() => navigation.navigate('OrderPage', { selectedValue, selectedOptions })}
        style={styles.button}
      />
    </View>
  );
};

// OrderPage Component
const OrderPage = ({ route, navigation }) => {
  const { selectedValue, selectedOptions } = route.params;

  return (
    <View style={styles.container}>
      <ReusableText style={styles.message}>Thank You For Your Order!</ReusableText>
      <ReusableText style={styles.message}>Selected Vegetable: {selectedValue}</ReusableText>
      <ReusableText style={styles.message}>Cutting Options:</ReusableText>
      <ReusableText style={styles.message}>
        {selectedOptions.slice ? 'Slice' : ''}
        {selectedOptions.rectangle ? ', Rectangle' : ''}
        {selectedOptions.dices ? ', Dices' : ''}
      </ReusableText>

      <ReusableButton
        title="Back to Home"
        onPress={() => navigation.navigate('HomePage')}
        style={styles.button}
      />
      <ReusableImage
        source={{ uri: 'https://png.pngtree.com/png-clipart/20200709/ourmid/pngtree-delivery-boy-riding-with-mask-transparent-png-png-image_2303253.jpg' }}
        style={styles.image}
      />
    </View>
  );
};

// App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="OrderPage"
          component={OrderPage}
          options={{ title: 'Order Confirmation' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28A745',
  },
  image: {
    marginTop: 20,
  },
  dropdown: {
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
});

export default App;
