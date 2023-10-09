import {View, Text} from 'react-native'
import { styles } from './style'
import { Header } from './header/Header'
import { Body } from './body/Body'
import { Footer } from './footer/Footer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export const Layout_01 =({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
            </View>

            <View style={styles.body}>
                <Body/>
            </View>

            <View style={styles.footer}>
                <Footer/>
            </View>
        </View>
    )
}