import { StatusBar } from 'expo-status-bar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Button} from 'react-native';

library.add(faSquare);

export default function App_1c(){
    return(
      <View style={styles4.con4}>
        <View style={styles4.con4_1}>
          <Text style={{fontSize:'60px', fontWeight:'700'}}>
            CODE
          </Text>
  
        </View>
  
        <View style={styles4.con4_2}>
          <View style={styles4.con4_2_1}>
            <Text style={{fontSize:'20px', fontWeight:'700'}}>
              VERIFICATION
            </Text>
  
          </View>
  
          <View style={styles4.con4_2_2}>
            <Text style={{fontSize:'15px', fontWeight:'700'}}>
              Enter ontime password sent on 
            </Text>
  
            <Text style={{fontSize:'15px', fontWeight:'700'}}>
              ++84 123 456 789
            </Text>
  
          </View>
        </View>
  
        <View style={styles4.con4_3}>
          <View style={styles4.con4_3_1}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <FontAwesomeIcon icon="fa-regular fa-square" size={'50px'} />
              <FontAwesomeIcon icon="fa-regular fa-square" size={'50px'} />
              <FontAwesomeIcon icon="fa-regular fa-square" size={'50px'} />
              <FontAwesomeIcon icon="fa-regular fa-square" size={'50px'} />
              <FontAwesomeIcon icon="fa-regular fa-square" size={'50px'} />
              <FontAwesomeIcon icon="fa-regular fa-square" size={'50px'} />
            </View>
  
          </View>
  
          <View style={styles4.con4_3_2}>
            <View style={{height:'50px', width:'339px'}}> 
              <Button title="VERIFY CODE" color='#E3C000'/>
            </View>
  
          </View>
        </View>
  
        <StatusBar style="auto" />
      </View>
    )
  }
  
  const styles4 = StyleSheet.create({
    con4: {
      flex:1,
      backgroundImage:'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    con4_1:{
      flex:1,
      //backgroundColor: 'green',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  
    con4_2:{
      flex:1,
      //backgroundColor: 'yellow',
      width: '100%',
    },
  
    con4_2_1:{
      flex:1,
      //backgroundColor: 'yellow',
      justifyContent: 'flex-end',
      alignItems: 'center',
      
    },
  
    con4_2_2:{
      flex:1,
      //backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    con4_3:{
      flex:1,
      //backgroundColor: 'red',
      width: '100%',
    },
  
    con4_3_1:{
      flex:1,
      //backgroundColor: 'red',
    },
  
    con4_3_2:{
      flex:1,
      //backgroundColor: 'green',
      alignItems: 'center',
      
    },
  });