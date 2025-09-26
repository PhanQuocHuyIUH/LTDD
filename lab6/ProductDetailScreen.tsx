import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/dt1.png')} style={styles.image} />

      <Text style={styles.title}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <Text style={styles.price}>1.790.000 đ</Text>
      <Text style={styles.oldPrice}>1.990.000 đ</Text>

      <TouchableOpacity
        style={styles.selectBtn}
        onPress={() => navigation.navigate('ColorPicker')}>
        <Text style={styles.selectText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyBtn}>
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 0,
    margin: 0,
  },
  image: { width: 300, height: 360, resizeMode: 'center', alignSelf: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  price: { fontSize: 20, color: 'red', fontWeight: 'bold' },
  oldPrice: {
    fontSize: 16,
    color: '#777',
    textDecorationLine: 'line-through',
    marginBottom: 20,
  },
  selectBtn: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  selectText: { fontSize: 16, textAlign: 'center' },
  buyBtn: { backgroundColor: 'red', padding: 15, borderRadius: 5 },
  buyText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
