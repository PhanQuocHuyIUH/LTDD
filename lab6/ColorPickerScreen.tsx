import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const colors = ['#C5F1FB', '#F30D0D', '#000000', '#234896'];

const ColorPickerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      <View style={styles.colorRow}>
        {colors.map((c, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorBox, { backgroundColor: c }]}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.doneBtn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.doneText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    padding: 20,
    alignItems: 'center',
  },
  title: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
  colorRow: { flexDirection: 'column', gap: 15 },
  colorBox: {
    width: 50,
    height: 50,
    borderColor: '#000',
    borderRadius: 5,
  },
  doneBtn: {
    marginTop: 40,
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  doneText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ColorPickerScreen;
