import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import eyeIcon from '../assets/eye.png';

const Screen6 = () => {
  return (
    <LinearGradient colors={['#D4E4D1', '#D4E4D1']} style={styles.container}>
      <View style={[styles.centerView, { flex: 2 }]}>
        <Text style={[styles.fontText, { fontSize: 25 }]}>REGISTER</Text>
      </View>
      <View style={[styles.centerView, { flex: 3 }]}>
        <Text style={styles.inputLabel}>Name</Text>
        <View style={styles.inputContainer} />
        <Text style={styles.inputLabel}>Phone</Text>
        <View style={styles.inputContainer} />
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer} />
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={eyeIcon} />
        </View>
        <Text style={styles.inputLabel}>Birthday</Text>
        <View style={styles.inputContainer} />
        <View style={styles.genderContainer}>
          <Text>Male</Text>
          <View style={styles.radio} />
          <Text>Female</Text>
          <View style={styles.radio} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.fontText, { fontSize: 20 }]}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.centerView, { flex: 1 }]}>
        <Text style={styles.termsText}>When you agree to terms and conditions</Text>
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
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  inputContainer: {
    width: '80%',
    height: 40,
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
    borderRadius: 5,
    paddingLeft: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    width: 20,
    height: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
  },
  button: {
    backgroundColor: '#A52A2A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  termsText: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: '#000000',
    textAlign: 'center',
  },
});

export default Screen6;