import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Screen_01 } from './src/components/screen_01/Screen_01';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartShopping , faMagnifyingGlass, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { Screen_02 } from './src/components/screen_02/Screen_02';
import { Home } from './src/components/home/Home';



export default function App() {
  const Stack = createNativeStackNavigator();
  
  const renderHeader = () => {
    return (
      <View>
        <FontAwesomeIcon icon={faCartShopping} size={24} style={{marginRight:'20px', color:'white'}}/>
      </View>
    );
  }

  const renderHeader2 = () => {
    return(
      <View style={{flexDirection:'row', alignItems:'center'}} >
        <FontAwesomeIcon style={{marginRight: -33, zIndex: 0}} size={28} icon={faMagnifyingGlass}/>
        <TextInput style={{backgroundColor:'white', height: '40px', width: '120px', borderRadius: 7, fontSize: 18, fontWeight:'300', paddingLeft: 34}} placeholder='Dây cáp usb' ></TextInput>
        <FontAwesomeIcon style={{paddingLeft: 20, color:'white'}} size={28} icon={faCartShopping}  />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen 
          name='screen_1' 
          component={Screen_01}
          options={{
            title: 'Chat',
            headerStyle: {
              backgroundColor: "#1BA9FF",
            },

            headerTintColor: "white",
            headerRight: () => {
              return (
                <View>
                  <FontAwesomeIcon icon={faCartShopping} size={24} style={{marginRight:'20px', color:'white'}}/>
                </View>
              );
            },
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen 
          name='screen_2' 
          component={Screen_02}
          options={{
            title: '',
            headerTitle: () => {
              return(
                <View style={{flexDirection:'row', alignItems:'center'}} >
                  <FontAwesomeIcon style={{marginRight: -33, zIndex: 0}} size={28} icon={faMagnifyingGlass}/>
                  <TextInput style={{backgroundColor:'white', height: '40px', width: '180px', borderRadius: 7, fontSize: 18, fontWeight:'300', paddingLeft: 34}} placeholder='Dây cáp usb' ></TextInput>
                  <FontAwesomeIcon style={{marginLeft: 20, color:'white'}} size={28} icon={faCartShopping}  />
                </View>
              )
            },

            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#1BA9FF'
            },

            headerRight: () => {
              return(
                <View> 
                  <FontAwesomeIcon style={{marginRight: 10, color:'white'}} size={28} icon={faEllipsis} />
                </View>
              )
            }
          }}
        />

        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            title:'Home',
            headerStyle: {
              backgroundColor: '#1BA9FF'
            },

            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
