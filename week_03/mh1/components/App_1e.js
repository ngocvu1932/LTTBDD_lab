import { StatusBar } from 'expo-status-bar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
library.add(faCircle);


export default function App_1e(){
    return(
      <View style={styles6.con6}>
        <View style={styles6.con6_1}>
          <Text style={{fontSize:'25px', fontWeight:700}}>
            REGISTER
          </Text>
        </View>
  
        <View style={styles6.con6_2}>
          <View style={{flex:1, justifyContent:'space-around', alignItems:'center'}}>
            <TextInput placeholder="Name" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px', paddingLeft:'10px'}}/>
            <TextInput placeholder="Phone" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px',  paddingLeft:'10px'}}/>
            <TextInput placeholder="Email" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px',  paddingLeft:'10px'}}/>
            <TextInput placeholder="Password" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px', paddingLeft:'10px'}}/>
            <TextInput placeholder="Birthday" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px',  paddingLeft:'10px'}}/>
            <View style={{flexDirection:'row'}}>
              <FontAwesomeIcon icon="fa-regular fa-circle" style={{}} />
              <Text style={{marginRight:'50px'}}> Male</Text>
              <FontAwesomeIcon icon="fa-regular fa-circle" />
              <Text> Female</Text>
            </View>
          </View>
        </View>
  
        <View style={styles6.con6_3}>
          <View style={{width:'330px', height:'45px'}}>
            <Button title="REGISTER" color='#E53935'/>
          </View>
          <View>
            <Text>
              When you agree to terms and coditions
            </Text>
          </View>
        </View>
  
        <StatusBar style="auto" />
      </View>
    )
  }
  
  const styles6 = StyleSheet.create({
    con6:{
      flex:1,
      backgroundColor: '#D8EFDF',
    },
  
    con6_1:{
      flex:1,
      //backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    con6_2:{
      flex:5,
      //backgroundColor: 'yellow',
      justifyContent: 'flex-start',
    },
  
    con6_3:{
      flex:2,
      //backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });