
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FranchiseSignUpScreen from './components/FranchiseSignUpScreen';
import FranchiseLoginScreen from './components/FranchiseLoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import FranchiseHomeScreen from './components/FranchiseHomeScreen'; // Assuming you have this screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FranchiseLogin">
        <Stack.Screen name="FranchiseSignUp" component={FranchiseSignUpScreen} />
        <Stack.Screen name="FranchiseLogin" component={FranchiseLoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="FranchiseHome" component={FranchiseHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
