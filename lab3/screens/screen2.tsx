import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ellipse from '../assets/ellipse.png';

const Screen2 = () => {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      style={styles.container}>
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
          { flex: 1, justifyContent: 'space-evenly' },
        ]}>
        <View style={[styles.centerView, { flexDirection: 'row', gap: 50, justifyContent: 'space-around' }]}>
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
        <TouchableOpacity style={{marginBottom:60, marginTop:10}}>
          <Text style={[styles.fontText, { fontSize: 18 }]}>HOW WE WORK?</Text>
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

export default Screen2;
