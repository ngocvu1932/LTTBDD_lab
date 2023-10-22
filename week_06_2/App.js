import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_1 } from './src/components/screen_1/Screen_1';
import { Screen_2 } from './src/components/screen_2/Screen_2';
import { Screen_3 } from './src/components/screen_3/Screen_3';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const Stack= createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    //   {/* <Screen_1/> */}
    //   {/* <Screen_2/> */}
    //   <Screen_3/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Screen_1}/>
        <Stack.Screen name='scr2' component={Screen_2}/>
        <Stack.Screen name='scr3' component={Screen_3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
