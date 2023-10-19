import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faBars, faArrowLeft} from '@fortawesome/free-solid-svg-icons'


const DATA = [
    {
        id: '01',
        nameProduct: 'Ca nấu lẩu, nấu mì mini',
        nameShop: 'Shop Devang',
        imageUrl: require('../../../assets/ca_nau_lau.png')
    },

    {
        id: '02',
        nameProduct: '1 KG KHÔ GÀ BƠ TỎI',
        nameShop: 'LTD Food',
        imageUrl: require('../../../assets/ga_bo_toi.png')
    },

    {
        id: '03',
        nameProduct: 'Xe cần cẩu đa năng',
        nameShop: 'Shop Thế giới đồ chơi',
        imageUrl: require('../../../assets/xa_can_cau.png') 
    },

    {
        id: '04',
        nameProduct: 'Đồ chơi dạng mô hình',
        nameShop: 'Shop Thế giới đồ chơi',
        imageUrl: require('../../../assets/do_choi_dang_mo_hinh.png') 
    },

    {
        id: '05',
        nameProduct: 'Lãnh đạo giản đơn',
        nameShop: 'Shop Minh long Book',
        imageUrl: require('../../../assets/lanh_dao_gian_don.png') 
    },

    {
        id: '06',
        nameProduct: 'Hiểu lòng con trẻ',
        nameShop: 'Shop Minh long Book',
        imageUrl: require('../../../assets/hieu_long_con_tre.png') 
    },

    {
        id: '07',
        nameProduct: 'Đồ chơi dạng mô hình',
        nameShop: 'Shop Thế giới đồ chơi',
        imageUrl: require('../../../assets/do_choi_dang_mo_hinh.png') 
    },

    {
        id: '08',
        nameProduct: 'Lãnh đạo giản đơn',
        nameShop: 'Shop Minh long Book',
        imageUrl: require('../../../assets/lanh_dao_gian_don.png') 
    },

    {
        id: '09',
        nameProduct: 'Hiểu lòng con trẻ',
        nameShop: 'Shop Minh long Book',
        imageUrl: require('../../../assets/hieu_long_con_tre.png') 
    }
];

export const Screen_01 = () => {
    const renderItem = ({item}) => (
        <View style={styles.conView}>
            <Image source={item.imageUrl} style={styles.image}/>
            <View >
                <Text style={styles.textName}> {item.nameProduct} </Text>
                <Text style={styles.textName}> {item.nameShop}</Text>
            </View>

            <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}} >
                <TouchableOpacity style={styles.buttonChat}>
                    <Text style={{fontSize: 14, color: 'white', justifyContent:'center', alignItems:'center'}}> Chat </Text>
                </TouchableOpacity>
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.textChat}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!</Text>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id }
                renderItem={renderItem}
            />

            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <View style={styles.footer}>
                    <View style={styles.grpOp}> 
                        <FontAwesomeIcon style={{padding: 10}} size={35} icon={faBars} />
                        <FontAwesomeIcon style={{padding: 10}} size={35} icon={faHouse} />
                        <FontAwesomeIcon style={{padding: 10}} size={35} icon={faArrowLeft}/>
                    </View>
                </View>
            </View>
        </View>

        
  );
}

