import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {styles} from './style'
import { Layout_01 } from './src/components/screen_01/Layout_01';
import { Layout_02 } from './src/components/screen_02/Layout_02';
import { Layout_03 } from './src/components/screen_03/Layout_03';
import { Layout_04 } from './src/components/screen_04/Layout_04';
import { Layout_05 } from './src/components/screen_05/Layout_05';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
    const Stack= createNativeStackNavigator();
    return (
        <View style={styles.container}>
            {/* <Layout_01/> */}
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Screen_01'>
                    <Stack.Screen name="Screen_01" component={Layout_01}></Stack.Screen>
                    <Stack.Screen name="Screen_02" component={Layout_02}></Stack.Screen>
                    <Stack.Screen name="Screen_03" component={Layout_03}></Stack.Screen>
                    <Stack.Screen name="Screen_04" component={Layout_04}></Stack.Screen>
                    <Stack.Screen name="Screen_05" component={Layout_05}></Stack.Screen>
                </Stack.Navigator>                
            </NavigationContainer>
        </View>
    );
}

