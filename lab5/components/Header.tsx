import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ant-design_arrow-left-outlined.png')} />
      <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>
        Chat
      </Text>
      <Image source={require('../assets/bi_cart-check.png')} />
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
