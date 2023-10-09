import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {styles} from './style'
import { Layout_01 } from './src/components/screen_01/Layout_01';
import { Layout_02 } from './src/components/screen_02/Layout_02';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Layout_01/> */}
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Screen_01'>
                    <Stack.Screen name="Screen_01" component={Layout_01}></Stack.Screen>
                    <Stack.Screen name="Screen_02" component={Layout_02}></Stack.Screen>
                </Stack.Navigator>                
            </NavigationContainer>
        </View>
    );
}

