import React from 'react';
import { View, Text, TouchableOpacity,Image  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import  { faStar,  faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const Body = () => {
    const navigation = useNavigation();  
    const colorSelection = () => {
        navigation.navigate('Screen_02')
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.container_1}>
                <Image style={styles.image} source={require('../../../../assets/vs_black.png')} />
            </View>

            <View style={styles.container_2}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.text}>
                        Điện thoại Vsmart Joy 3 - Hàng chính hãng
                    </Text>
                </View>

                <View style={styles.grpRate}>
                    <FontAwesomeIcon icon={faStar} size={23} color='#E0E41A' />
                    <FontAwesomeIcon icon={faStar} size={23} color='#E0E41A' />
                    <FontAwesomeIcon icon={faStar} size={23} color='#E0E41A' />
                    <FontAwesomeIcon icon={faStar} size={23} color='#E0E41A' />
                    <FontAwesomeIcon icon={faStar} size={23} color='#E0E41A' />
                    <Text style={{marginLeft: 60}}> (Xem 828 đánh giá)</Text>
                </View>

                <View style={styles.grpPrice}>
                    <Text style={styles.textPrice}> 1.790.000 đ </Text>
                    <Text style={styles.textPrice2}> 1.790.000 đ</Text>
                </View>

                <View style={styles.grpNow}>
                    <Text style={{fontSize:12, fontWeight: 700, color:'#FA0000'}}>
                        Ở ĐÂU RẺ HƠN HOÀN TIỀN
                    </Text>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={{fontSize:20}}> ? </Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', marginTop: 20}}>
                    <TouchableOpacity onPress={colorSelection} style={styles.touchChooseColor}>
                        <Text style={{fontSize:15, fontWeight:400}}> 4 MÀU - CHỌN MÀU</Text>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </TouchableOpacity>
                </View>

            </View>
            
        </View>
    )
}