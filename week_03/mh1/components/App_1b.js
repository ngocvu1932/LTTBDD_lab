import { StatusBar } from 'expo-status-bar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
library.add(faEnvelope);
library.add(faLock);

//MH3
export default function App_1b() {
    return (
      <View style={styles3.con3}>
        <View style={styles3.con3_1}>
          <Text>
            <FontAwesomeIcon icon="fa-solid fa-lock" size={'140px'} />
          </Text>
        </View>
        <View style={styles3.con3_2}>
          <View style={styles3.con3_2_1}>
            <Text style={{fontSize:'25px', fontWeight:'700'}}>
              FORGET
            </Text>
            <Text style={{fontSize:'25px', fontWeight:'700'}}>
              PASSWORD
            </Text>
          </View>
  
          <View style={styles3.con3_2_2}>
            <Text style={{fontSize:'15px', fontWeight:'700'}}>
              Provide your account's email for which you want to 
            </Text>
  
            <Text style={{fontSize:'15px', fontWeight:'700'}}>
              reset your password 
            </Text>
            
          </View>
        </View>
  
        <View style={styles3.con3_3}>
          <View style={styles3.con3_3_1}>
            <FontAwesomeIcon icon="fa-regular fa-envelope"/> 
            <TextInput placeholder="Email" style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 3}}/>
          </View>
          <View style={styles3.con3_3_2}>
            <View style={{height:'45px', width:'305px'}}>
              <Button title="NEXT" color='#E3C000' />
            </View>
          </View>
        </View>
  
        <StatusBar style="auto" />
      </View>
    )
  }
  
  const styles3 = StyleSheet.create({
    con3: {
      flex: 1,
      backgroundImage:'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
  
    con3_1: {
      flex: 1,
      //backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width:'100%'
    },
  
    con3_2: {
      flex: 1,
      //backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
  
    con3_2_1: {
      flex: 1,
      //backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
  
    con3_2_2: {
      flex: 1,
      //backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%',
      //alignContent:'center'
    },
  
    con3_3: {
      flex: 1,
      //backgroundColor: 'yellow',
      //alignItems: 'center',
      //justifyContent: 'center',
      width:'100%'
    },
  
    con3_3_1: {
      flex: 1,
      //backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      flexDirection: 'row',
    },
  
    con3_3_2: {
      flex: 1,
      //backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%',
      //alignContent:'center'
    },
    }
  );
  