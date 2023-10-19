import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons"

const DATA=[
    {
        id: '01',
        nameProduct: 'Cáp chuyển từ Cổng USB sang PS2',
        price: '69.900đ',
        imageURL: require('../../../assets/giacchuyen 1.png')
    },

    {
        id: '02',
        nameProduct: 'Cáp chuyển từ Cổng USB sang PS2',
        price: '69.900đ',
        imageURL: require('../../../assets/daynguon 1.png')
    },

    {
        id: '03',
        nameProduct: 'Cáp chuyển từ Cổng USB sang PS2',
        price: '69.900đ',
        imageURL: require('../../../assets/dauchuyendoipsps2 1.png')
    },

    {
        id: '04',
        nameProduct: 'Cáp chuyển từ Cổng USB sang PS2',
        price: '69.900đ',
        imageURL: require('../../../assets/dauchuyendoi 1.png')
    },

    {
        id: '05',
        nameProduct: 'Cáp chuyển từ Cổng USB sang PS2',
        price: '69.900đ',
        imageURL: require('../../../assets/carbusbtops2 1.png')
    },

    {
        id: '06',
        nameProduct: 'Cáp chuyển từ Cổng USB sang PS2',
        price: '69.900đ',
        imageURL: require('../../../assets/daucam 1.png')
    },

]


export const Screen_02 = () => {
    const renderItem = ({item}) => (
        <View style={styles.conView} >
            <Image source={item.imageURL} style={{height: 90, width:155}} ></Image>
            <Text style={{fontSize:12, fontFamily:'Roboto', fontWeight:'400', marginTop:10}}> {item.nameProduct} </Text>
            <View style={styles.grpRate}>
                <FontAwesomeIcon icon={faStar} size={12} style={{color:'yellow', marginRight: 3}} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size={12} style={{color:'yellow', marginRight: 3}} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size={12} style={{color:'yellow', marginRight: 3}} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size={12} style={{color:'yellow', marginRight: 3}} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size={12} style={{color:'#E4E4E4', marginRight: 3}}></FontAwesomeIcon>
                <Text style={{fontSize:12, fontFamily:'Roboto', fontWeight:'400', marginLeft: 10 }} >  (15)</Text>
            </View>
            
            <View style={styles.grpPrice}>
                <Text style={{fontSize:12, fontFamily:'Roboto', fontWeight:'700'}}>{item.price}</Text>
                <Text style={{fontSize:12, fontFamily:'Roboto', fontWeight:'400', marginLeft: 10 }}> -39%  </Text>
            </View>
        </View>
    )

    return( 
        <View style={styles.container}>
            
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    );
}