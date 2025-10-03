import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imageBox}>
        <Image source={require('./assets/xexanh.png')} style={styles.image} />
      </View>
      <Text style={styles.title}>POWER BIKE SHOP</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ListScreen')}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: 'VT323',
  },
  subText: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 32,
  },
  imageBox: {
    width: 300,
    height: 270,
    backgroundColor: 'rgba(233,65,65,0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 60 },
  btn: {
    backgroundColor: '#E94141',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  btnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default WelcomeScreen;
