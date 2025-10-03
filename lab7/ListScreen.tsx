import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';

const bikes = [
  {
    id: '1',
    name: 'Pinarello',
    price: 1800,
    image: require('./assets/xexanh.png'),
  },
  {
    id: '2',
    name: 'Pina Mountai',
    price: 1700,
    image: require('./assets/xedott.png'),
  },
  {
    id: '3',
    name: 'Pina Bike',
    price: 1500,
    image: require('./assets/xetim.png'),
  },
  {
    id: '4',
    name: 'Pinarello',
    price: 1900,
    image: require('./assets/xedo.png'),
  },
  {
    id: '5',
    name: 'Pinarello',
    price: 2700,
    image: require('./assets/xetim.png'),
  },
  {
    id: '6',
    name: 'Pinarello',
    price: 1350,
    image: require('./assets/xedott.png'),
  },
];

const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world’s Best Bike</Text>
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ color: '#E94141', fontWeight: 'bold' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ color: '#BEB6B6' }}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ color: '#BEB6B6' }}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bikes}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', fontFamily: 'Voltaire' },
  header: {
    fontFamily: 'Ubuntu',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#E94141',
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  filterBtn: {
    borderWidth: 1,
    borderColor: 'rgba(233, 65, 65, 0.53)',
    backgroundColor: 'rgba(196, 196, 196, 0)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
});

export default ListScreen;
