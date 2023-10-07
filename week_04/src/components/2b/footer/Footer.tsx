import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonSend}>
                <Text style={styles.textSend}> Gửi </Text>
            </TouchableOpacity>
        </View>
    )
};