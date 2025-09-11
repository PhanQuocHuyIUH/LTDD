import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import userIcon from '../assets/user.png';
import lockIcon from '../assets/lock.png';
import eyeIcon from '../assets/eye.png';

const Screen7 = () => {
  return (
    <LinearGradient colors={['#FFC107', '#FFC107']} style={styles.container}>
      <View style={[styles.centerView, { flex: 2, marginTop: 20 }]}>
        <Text style={[styles.fontText, { fontSize: 25 }]}>LOGIN</Text>
      </View>
      <View style={[styles.centerView, { flex: 3 }]}>
        <View style={styles.inputRow}>
          <Image style={styles.icon} source={userIcon} />
          <Text style={styles.inputLabel}>Name</Text>
          <View style={styles.inputContainer} />
        </View>
        <View style={styles.inputRow}>
          <Image style={styles.icon} source={lockIcon} />
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputContainer}>
            <Image style={styles.eyeIcon} source={eyeIcon} />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={[styles.fontText, { fontSize: 20, color: "white" }]}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>CREATE ACCOUNT</Text>
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
    color: '#000000',
    width: '30%',
  },
  inputContainer: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    paddingLeft: 10,
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
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  linkText: {
    color: '#E3C000',
    fontFamily: 'Roboto',
    fontWeight: 700,
    marginTop: 10,
  },
});

export default Screen7;