import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';


export const Body = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textSty}> Chọn một màu bên dưới:  </Text>
            </View>

            <View style={styles.grpIcon}>
                <TouchableOpacity> <FontAwesomeIcon icon={faSquare} size={85} color='#C5F1FB' /> </TouchableOpacity>
                <TouchableOpacity> <FontAwesomeIcon icon={faSquare} size={85} color='#F30D0D' /> </TouchableOpacity>
                <TouchableOpacity> <FontAwesomeIcon icon={faSquare} size={85} color='##000000'/> </TouchableOpacity>
                <TouchableOpacity> <FontAwesomeIcon icon={faSquare} size={85} color='#234896'/> </TouchableOpacity>
            </View>
        </View>
    )
}