import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Product({ name, imageUrl, shopName })  {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.shopName}>{shopName}</Text>
        <Button title="Chat" onPress={() => alert('Chat with shop')} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  shopName: {
    color: 'gray',
    fontSize: 14,
    marginVertical: 5,
  },
});
