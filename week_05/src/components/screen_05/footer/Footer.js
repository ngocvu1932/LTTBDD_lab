import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}> CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    )
}