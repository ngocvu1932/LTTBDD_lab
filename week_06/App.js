import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_01 } from './src/components/screen_01/Screen_01';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Screen_02 } from './src/components/screen_02/Screen_02';

const Stack = createNativeStackNavigator();

export default function App() {
  
  const renderHeader = () => {
    return (
      <View>
        <FontAwesomeIcon icon={faCartShopping} size={24} style={{marginRight:'20px', color:'white'}}/>
        
      </View>
    );

  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 
          name='chat' 
          component={Screen_01}
          options={{
            title: 'hahaha', 
            headerStyle:{backgroundColor:'#1BA9FF'},
            //headerRight: renderHeader,
            //headerTintColor: "rgba(255, 255, 255, 1)",
            headerTitleStyle: {
              //color: 'red',
            }
          }}
        ></Stack.Screen> */}
        <Stack.Screen name='giaaaa' component={Screen_02}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

    // <View>
    //   <Screen_01/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
