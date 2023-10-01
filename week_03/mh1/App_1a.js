import { StatusBar } from 'expo-status-bar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Button} from 'react-native';
library.add(faCircle);


// MH2
export default function MH2() {
    return(
      <View style={styles2.con2}>
        <View style={styles2.con2_1}>
          <Text>
            <FontAwesomeIcon icon="fa-regular fa-circle" size={'142px'} />
          </Text>
          
        </View>
        <View style={styles2.con2_2}>
          <View style={styles2.con2_2_1}>
            <Text style={{fontSize:'25px', fontWeight:'700'}}>
              GROW
            </Text>
            <Text  style={{fontSize:'25px', fontWeight:'700'}}>
              YOUR BUSINESS
            </Text>
          </View>
          <View style={styles2.con2_2_2}>   
            <Text style={styles2.text_1}>
              We will help you to grow your business using online server
            </Text>
          </View>
          
        </View>
        <View style={styles2.con2_3}>
          <View style={styles2.con2_3_1}> 
            {/* <View style={{height:'45px', width:'125px', flexDirection:'row'}}>
              <Button title="LOGIN"  color='#E3C000'/>
              <Button title="SIGN UP" color='#E3C000'/>
            </View> */}
            <View style={styles2.con2_3_1_1}>
              <View style={{height:'45px', width:'125px'}}>
                <Button title="LOGIN" color='#E3C000'/>
              </View>
            </View>
  
            <View style={styles2.con2_3_1_2}>
              <View style={{height:'45px', width:'125px'}}>
                <Button title="SIGN UP" color='#E3C000'/>
              </View>
            </View>
          </View>
  
          <View style={styles2.con2_3_2}>
            <Text style={{fontSize:'18px', fontWeight:'700'}}> 
              HOW WE WORK?
            
            </Text> 
            
          </View>
          
          
        </View>
        <StatusBar style="auto" />
      </View>
    )
}
  
const styles2 = StyleSheet.create({
    con2: {
      flex: 1,
      backgroundImage:'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    con2_1: {
      flex:2,
      justifyContent: 'flex-end',
      alignItems: 'center',
      //backgroundColor: 'yellow',
      width: '100%'
  
    }, 
  
    con2_2: {
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'green',
      width: '100%'
    },
  
    con2_2_1: {
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'red',
      width: '100%'
    },
  
    con2_2_2: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'blue',
      width: '100%'
    },
  
    con2_3: {
      flex:2,
      width: '100%'
    }, 
  
    con2_3_1: {
      flex:1,
      //backgroundColor: 'pink',
      flexDirection: 'row'
      
    }, 
  
    con2_3_1_1:{
      flex:1,
      //backgroundColor: 'red', 
      alignItems:'center',
      justifyContent:'center'
  
    }, 
  
    con2_3_1_2:{
      flex:1,
      //backgroundColor: 'pink', 
      alignItems:'center',
      justifyContent:'center'
  
    },
  
    con2_3_2: {
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      //backgroundColor: 'violet',
      width: '100%'
    }, 
  
    text_1:{
      fontSize: 15, 
      fontWeight:'700', 
      textAlign: 'center',
    }
});