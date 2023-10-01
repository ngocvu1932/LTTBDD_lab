import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App_2a() {
    return(
      <View style={styles7.con7}>
        <View style={styles7.con7_1}>
          <Text style={{fontSize:'30px', fontWeight:'700', marginLeft:'20px'}}>
            LOGIN
          </Text>
        </View>
        <View style={styles7.con7_2}>
          <View style={styles7.con7_2_1}>
            <View style={{flex:1, justifyContent:'space-around', alignItems:'center'}}>
              <TextInput placeholder="Name" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px', paddingLeft:'10px'}}/>
              <TextInput placeholder="Password" style={{height: 54, width: 330, borderColor: 'gray', borderWidth: 3, borderRadius:'10px', paddingLeft:'10px'}}/>
            </View>
          </View>
          <View style={styles7.con7_2_2}>
            <View style={{height:'45px', width:'330px'}}>
              <Button title="LOGIN" color='#060000'/>
            </View>
          </View>
        </View>
        <View style={styles7.con7_3}>
          <Text style={{fontWeight:'700', fontSize:'20px', marginTop:'20px'}}>
            CREATE ACCOUNT
  
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    )
  }
  
  const styles7 = StyleSheet.create({
    con7:{
      flex:1,
      backgroundImage:'linear-gradient(rgba(251, 203, 0, 1) 0%, rgba(191, 154, 0, 1) 100%)',
    },
  
    con7_1:{
      flex:2,
      //backgroundColor: 'red',
      justifyContent: 'center',
    },
  
    con7_2:{
      flex:3,
      //backgroundColor: 'yellow',
    },
  
    con7_2_1:{
      flex:2,
      //backgroundColor: 'yellow',
    },
  
    con7_2_2:{
      flex:1,
      //backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    con7_3:{
      flex:2,
      //backgroundColor: 'green',
      alignItems: 'center',
    },
    
  });