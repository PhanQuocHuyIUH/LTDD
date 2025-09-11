import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import lockIcon from '../assets/lock.png';

const Screen3 = () => {
  return (
    <LinearGradient colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} style={styles.container}>
      <View style={[styles.centerView, { flex: 1, marginTop: 60 }]}>
        <Image style={{ width: 60, height: 60 }} source={lockIcon} />
      </View>
      <View style={[styles.centerView, { flex: 2, marginTop: 20 }]}>
        <Text style={[styles.fontText, { fontSize: 25 }]}>FORGET</Text>
        <Text style={[styles.fontText, { fontSize: 25 }]}>PASSWORD</Text>
        <Text style={[styles.fontText, { textAlign: 'center', padding: 20, fontSize: 15 }]}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>
      <View style={[styles.centerView, { flex: 1 }]}>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer} />
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.fontText, { fontSize: 20 }]}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontText: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: '#000000',
  },
  inputLabel: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: '#000000',
    marginBottom: 10,
  },
  inputContainer: {
    width: '80%',
    height: 40,
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default Screen3;