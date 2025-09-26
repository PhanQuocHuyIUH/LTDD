import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// or any files within the Snack
import ProductDetailScreen from './ProductDetailScreen';
import ColorPickerScreen from './ColorPickerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductDetail"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="ColorPicker" component={ColorPickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
