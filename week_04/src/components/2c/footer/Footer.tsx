import React from 'react'
import { View ,TouchableOpacity, Text} from 'react-native'
import { styles } from './style'

export const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonGen}>
                <Text style={styles.text}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
        </View>
    )
}