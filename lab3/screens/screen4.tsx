import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen4 = () => {
  return (
    <LinearGradient colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} style={styles.container}>
      <View style={[styles.centerView, { flex: 1, marginTop: 60 }]}>
        <Text style={[styles.fontText, { fontSize: 50 }]}>CODE</Text>
      </View>
      <View style={[styles.centerView, { flex: 2, marginTop: 20 }]}>
        <Text style={[styles.fontText, { fontSize: 25 }]}>VERIFICATION</Text>
        <Text style={[styles.fontText, { textAlign: 'center', padding: 20, fontSize: 15 }]}>
          Enter one-time password sent on +84902605798
        </Text>
      </View>
      <View style={[styles.centerView, { flex: 1 }]}>
        <View style={styles.codeInputContainer} />
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.fontText, { fontSize: 20 }]}>VERIFY CODE</Text>
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
  codeInputContainer: {
    width: '60%',
    height: 40,
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default Screen4;