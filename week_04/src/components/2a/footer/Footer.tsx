import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.loginText}> LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.textFotgot}>
                Forgot your password?
            </Text>
            
        </View>
    )
}
