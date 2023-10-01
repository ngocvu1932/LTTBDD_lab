import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default function App_1d(){
    return(
      <View style={styles5.con5}>
        <View style={styles5.con5_1}>
          <View style={styles5.con5_1_1}>
            <Text style={{fontSize:'25px', fontWeight:'700'}}>
              LOGIN
            </Text>
          </View>
  
          <View style={styles5.con5_1_2}>
            <View>
              <TextInput placeholder="Email" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px', paddingLeft:'10px'}}/>
              <TextInput placeholder="Password" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px', marginTop:'20px', paddingLeft:'10px'}}/>
            </View>
          </View>
        </View>
  
        <View style={styles5.con5_2}>
          <View style={styles5.con5_2_1}>
            <View style={{height:'45px', width:'330px'}}>
              <Button title="LOGIN" color='#E53935'/>
            </View>
          </View>
  
          <View style={styles5.con5_2_2}>
            <Text style={{fontSize:'14px', fontWeight:'400'}}>
              When you agree to terms and coditions
            </Text>
  
            <Text style={{fontSize:'14px', fontWeight:'400', color:'#5D25FA'}}>
              For got yor password?
            </Text>
  
            <Text style={{fontSize:'14px', fontWeight:'400'}}>
              Or login with
            </Text>
          </View>
  
          <View style={styles5.con5_2_3}>
            <Text>
              hí
            </Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    )
  }
  
  const styles5 = StyleSheet.create({
    con5:{
      flex:1,
      backgroundColor: '#D8EFDF',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  
    con5_1:{
      flex:1,
      //backgroundColor: 'green',
      width: '100%',
    },
  
    con5_1_1:{
      flex:1,
      //backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  
    con5_1_2:{
      flex:2,
      //backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    con5_2:{
      flex:1,
      //backgroundColor: 'yellow',
      width: '100%',
    },
  
    con5_2_1:{
      flex:1,
      //backgroundColor: 'pink',
      alignItems: 'center',
      
    },
  
    con5_2_2:{
      flex:2,
      //backgroundColor: 'red',
      alignItems :  'center',
      justifyContent: 'space-around',
    },
    con5_2_3:{
      flex:2,
      backgroundColor: 'green',
      
    },
  });