import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import LoginBasics from './component/Login';
import SignupBasics from './component/Signup';
import LoginForm from './validation/LoginForm';
import Home from './validation/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FloatInput from './validation/FloatInput';
import CalHome from './Calculator/CalHome';
import Calculator from './Calculator/Calculator';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='Home' component={CalHome} /> */}
        <Stack.Screen name='Calculator' component={Calculator} />
        {/* <Stack.Screen name='Login' component={LoginForm} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FloatInput' component={FloatInput} /> */}
      </Stack.Navigator>
      {/* <LoginBasics /> */}
      {/* <SignupBasics /> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
})

export default App;