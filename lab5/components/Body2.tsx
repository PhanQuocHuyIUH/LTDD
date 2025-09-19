import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import Product from './Product';

const products = [
  {
    id: '1',
    name: 'Cà nấu lẩu, nấu mì mini...',
    imageUrl: require('../assets/ca_nau_lau.png'),
    shopName: 'Shop Devang',
  },
  {
    id: '2',
    name: '1KG Khô Gà Bơ Tỏi...',
    imageUrl: require('../assets/ga_bo_toi.png'),
    shopName: 'Shop LTD Food',
  },
  {
    id: '3',
    name: 'Xe Cần Cẩu Đa Năng',
    imageUrl: require('../assets/xa_can_cau.png'),
    shopName: 'Shop Thế giới đồ chơi',
  },
  {
    id: '4',
    name: 'Đồ Chơi Dạng Mô Hình',
    imageUrl: require('../assets/do_choi_dang_mo_hinh.png'),
    shopName: 'Shop Thế giới đồ chơi',
  },
  {
    id: '5',
    name: 'Lãnh Đạo Giản Dọn',
    imageUrl: require('../assets/lanh_dao_gian_don.png'),
    shopName: 'Shop Minh Long Book',
  },
];

export default function Body1() {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { paddingVertical: 12, paddingHorizontal: 30, fontSize: 18 },
        ]}>
        Bạn có thắc mắc với sản phẩm vừa x đừng ngại chát với shop!
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Product
            name={item.name}
            imageUrl={item.imageUrl}
            shopName={item.shopName}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 5,
    // backgroundColor: '#1BA9FF',
  },
  text: {
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'segoiUI',
  },
});
