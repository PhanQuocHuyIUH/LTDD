import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={item.image} style={styles.image} />
      </View>

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.discount}>15% OFF | ${item.price}</Text>
      <Text style={styles.oldPrice}>449$</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.desc}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>

      <View style={styles.bottomRow}>
        <Image source={require('./assets/heart.png')} style={styles.heart} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  imageBox: {
    backgroundColor: 'rgba(233,65,65,0.1)',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: { width: 250, height: 300, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  discount: { color: '#E94141', fontWeight: 'bold' },
  oldPrice: { textDecorationLine: 'line-through', color: '#444' },
  sectionTitle: { marginTop: 20, fontWeight: 'bold', fontSize: 16 },
  desc: { marginTop: 8, lineHeight: 20 },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  heart: { width: 24, height: 24 },
  btn: {
    backgroundColor: '#E94141',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default ProductDetailScreen;
