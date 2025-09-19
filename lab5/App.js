import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Header from './components/Header';
import Footer from './components/Footer';
import Body1 from './components/Body1';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body1 />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
