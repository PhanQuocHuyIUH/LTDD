import { View, StyleSheet, Image } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/menu-icon.png')} />
      <Image source={require('../assets/home-icon.png')} />
      <Image source={require('../assets/back-arrow.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 20,
    paddingVertical: 10,
    backgroundColor: '#1BA9FF',
  },
});
