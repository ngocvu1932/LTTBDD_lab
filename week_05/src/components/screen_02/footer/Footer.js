import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Footer = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() =>navigation.navigate('Details')}  style={styles.button}>
                <Text style={styles.text}> Xong</Text>

            </TouchableOpacity>
        </View>
    )
}