import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import  { faStar,  faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack= createNativeStackNavigator();

export const Body = ({navigation}) => {
    return (
        <View style={styles.container}>
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
                <TouchableOpacity onPress={() =>navigation.navigate('Details')} style={styles.touchChooseColor}>
                    <Text style={{fontSize:15, fontWeight:400}}> 4 MÀU - CHỌN MÀU</Text>
                    <FontAwesomeIcon icon={faChevronRight} />
                </TouchableOpacity>
            </View>
        </View>
    )
}