import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ item, navigation }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => navigation.navigate('Detail', { item })}
      style={[styles.card, pressed && styles.cardPressed]}>
      <Image source={require('./assets/heart.png')} style={styles.heart} />
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(247, 186, 131, 0.1)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2,
  },
  cardPressed: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    transform: [{ scale: 0.97 }],
  },
  heart: { position: 'absolute', top: 8, left: 8 },
  image: { width: 100, height: 100, resizeMode: 'contain' },
  name: { fontWeight: 'bold', marginTop: 5 },
  price: { color: '#E94141', fontWeight: 'bold' },
});

export default Card;
