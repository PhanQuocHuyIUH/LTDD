import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import eyeIcon from '../assets/eye.png';
import userIcon from '../assets/user.png';
import lockIcon from '../assets/lock.png';
import addIcon from '../assets/add.svg';
import wifiIcon from '../assets/wifi.png';
import facebookIcon from '../assets/facebook.png';
import eyeBall from '../assets/eyeball.svg';

const Screen8 = () => {
  return (
    <LinearGradient colors={['#E0E0E0', '#E0E0E0']} style={styles.container}>
      <View style={[styles.centerView, { flex: 1, marginTop: 20 }]}>
        <Image style={styles.largeIcon} source={eyeBall} />
      </View>
      <View style={[styles.centerView, { flex: 3 }]}>
        <View style={styles.inputRow}>
          <Image style={styles.icon} source={userIcon} />
          <Text style={styles.inputLabel}>Please input user name</Text>
          <View style={styles.inputContainer} />
        </View>
        <View style={styles.inputRow}>
          <Image style={styles.icon} source={lockIcon} />
          <Text style={styles.inputLabel}>Please input password</Text>
          <View style={styles.inputContainer}>
            <Image style={styles.eyeIcon} source={eyeIcon} />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={[styles.fontText, { fontSize: 20 }]}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.otherText}>Other Login Methods</Text>
        <View style={styles.socialContainer}>
          <Image style={styles.socialIcon} source={addIcon} />
          <Image style={styles.socialIcon} source={wifiIcon} />
          <Image style={styles.socialIcon} source={facebookIcon} />
        </View>
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
  largeIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputLabel: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: '#808080',
    width: '40%',
  },
  inputContainer: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    width: 20,
    height: 20,
  },
  loginButton: {
    backgroundColor: '#0000FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  linkText: {
    color: '#0000FF',
    fontFamily: 'Roboto',
    fontWeight: 700,
  },
  otherText: {
    color: '#0000FF',
    fontFamily: 'Roboto',
    fontWeight: 700,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default Screen8;