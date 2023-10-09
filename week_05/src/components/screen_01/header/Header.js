import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

export const Header = () => {
    return (
        <View style={styles.container}>   
            <Image style={styles.image} source={require('../../../../assets/vs_blue.png')} />
        </View>
    )
}