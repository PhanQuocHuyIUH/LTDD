import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import ListScreen from './ListScreen';
import ProductDetailScreen from './ProductDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="Detail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
