import React from 'react'
import { View , Text} from 'react-native'
import { styles } from './style'

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textPassword}>
                <Text style={styles.text}>PASSWORD</Text>
                <Text style={styles.text}>GENERATOR</Text>
            </View>
        </View>
    )
}