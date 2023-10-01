import { StatusBar } from 'expo-status-bar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Button} from 'react-native';

library.add(faCircle);

export default function FirstScreen() {
    return (
      <View style={styles.con}>
        <View style={styles.con_1}>
          <View style={{ alignItems:'center'}}>
            <FontAwesomeIcon icon="fa-regular fa-circle" size={'140px'}/>
          </View>
        </View>
        
        <View style={styles.con_2}>
          <Text style={{fontSize:'25px', fontWeight:'700'}}>
            GROW
          </Text>
  
          <Text style={{fontSize:'25px', fontWeight:'700'}}>
            YOUR BUSINESS
          </Text>
        </View>
        
        <View style={styles.con_3}>
          <View style={styles.con_3_1}>
            <Text style={{fontSize:'15px', fontWeight:'700'}}>
              We will help you to grow your business using 
            </Text>
            <Text style={{fontSize:'15px', fontWeight:'700'}}>
              online server
            </Text>
          </View>
          <View style={styles.con_3_2}>
              <View style={styles.con_3_2_1}>
                <View style={{height:'49px', width:'119px'}}>
                  <Button title="LOGIN" color='#E3C000'/>
                </View>
              </View>
              <View style={styles.con_3_2_2}>
                <View style={{height:'49px', width:'119px'}}>
                  <Button title="SIGN UP" color='#E3C000'/>
                </View>
              </View>
          </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    );
  }
  
const styles = StyleSheet.create({
con:{
    flex:1,
    backgroundColor: '#00CCF9',
},

con_1:{
    flex:2,
    //backgroundColor: 'red',
    justifyContent:'center',
},

con_2:{
    flex:1,
    //backgroundColor: 'yellow',
    alignItems:'center',
},

con_3:{
    flex:2,
    //backgroundColor: 'green',
},

con_3_1:{
    flex:1,
    //backgroundColor: 'green',
    alignItems:'center',
},

con_3_2:{
    flex:1,
    //backgroundColor: 'red',
    justifyContent:'center',
    flexDirection:'row',
    
},

con_3_2_1:{
    flex:1,
    //backgroundColor: 'blue',
    alignItems:'center',
    
},

con_3_2_2:{
    flex:1,
    //backgroundColor: 'pink',
    alignItems:'center',
    
},
});