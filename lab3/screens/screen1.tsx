import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ellipse from '../assets/ellipse.png';

const Screen1 = () => {
  return (
    <LinearGradient colors={['#00CCF9', '#00CCF9']} style={styles.container}>
        <View style={[styles.centerView, { flex: 1, marginTop: 60 }]}>
          <Image style={{ width: 140, height: 140 }} source={ellipse} />
        </View>
        <View style={[styles.centerView, { flex: 2, marginTop: 60 }]}>
          <Text style={[styles.fontText, { fontSize: 25 }]}>GROW</Text>
          <Text style={[styles.fontText, { fontSize: 25 }]}>YOUR BUSINESS</Text>
          <Text
            style={[
              styles.fontText,
              { textAlign: 'center', padding: 20, marginTop: 60, fontSize: 15 },
            ]}>
            We will help you to grow your business using online server
          </Text>
        </View>
        <View
          style={[
            styles.centerView,
            { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
          ]}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E3C000',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Text style={[styles.fontText, { fontSize: 20 }]}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E3C000',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Text style={[styles.fontText, { fontSize: 20 }]}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00CCF9',
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
});

export default Screen1;
