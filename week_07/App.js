import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_01 } from './src/components/screen_01/Screen_01';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { Screen_02 } from './src/components/screen_02/Screen_02';
import { Screen_03 } from './src/components/screen_03/Screen_03';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
         
      }}>
        <Stack.Screen 
          name='Home' 
          component={Screen_01}
          options={{
            headerTitleAlign: 'center',
            headerShown: false
          }}
        /> 

        <Stack.Screen
          name='Screen_02'
          component={Screen_02}
          
          options={{
            headerTitle: 'z',
            headerShown: false

          }}
        />

        
        <Stack.Screen
          name='Screen_03'
          component={Screen_03}
          
          options={{
            headerTitle: 'hhj',
            headerShown: false
          }}
        />
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
