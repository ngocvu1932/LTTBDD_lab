import { View, Text } from 'react-native'
import { styles } from './style'

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.login}>LOGIN</Text>
        </View>
    )
}
