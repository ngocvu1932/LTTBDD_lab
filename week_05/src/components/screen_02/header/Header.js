import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

export const Header = () => {
    return (
        <View style={styles.container}>   
           <View style={styles.imageLay}>
               <Image style={styles.image} source={require('../../../../assets/vs_blue.png')} /> 
               <Text style={styles.text}> Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>
           </View>
        </View>
    )
}