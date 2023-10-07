import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageTextUSB}>
                <Image source={require('../../../../assets/usb.png')} style={styles.image} />
                <Text style={styles.textUSB}>
                    USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
                </Text>
            </View>
        </View>
    )
};