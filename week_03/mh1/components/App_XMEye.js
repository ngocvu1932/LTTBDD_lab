import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default function App_XMEye(){
    return(
      <View style={styles8.con8}>
        <View style={styles8.con8_1}>
          <View style={styles8.con8_1_1}>
            <Image source={require('../assets/eye.png')} style={{width: 110, height: 110}}/>
          </View>

          <View style={styles8.con8_1_2}>
            <View style={{flex:1, alignItems:'center', justifyContent:'space-around'}}>
              <TextInput placeholder="Please input user name" style={{borderBottomWidth:2, borderBottomColor:'gray', width:300, height: 40}}/>
              <TextInput placeholder="Please input password" style={{borderBottomWidth:2, borderBottomColor:'gray', width:300, height: 40}}/>
            </View>
          </View>
        </View>

        <View style={styles8.con8_2}>
          <View style={styles8.con8_2_1}>
            <View style={styles8.con8_2_1_1}>
              <View style={{flex:1, width:300,  justifyContent:'center'}}>
                <Button title="Login" color="#386FFC" />
              </View>
            </View>

            <View style={styles8.con8_2_1_2}>
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize: 15, fontWeight:400}}> Register </Text>
                <Text style={{fontSize: 15, fontWeight:400}}> Forgot Password </Text>
              </View>
            </View>
          </View>

          <View style={styles8.con8_2_2}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image source={require('../assets/rr.png')} style={{width: '350px', height: '140px'}}/>
            </View>
          </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    )
  }
  
  const styles8 = StyleSheet.create({
    con8:{
      flex:1,
      //backgroundImage:'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
      backgroundColor:'#FFFFFF',
    },

    con8_1:{
      flex:1,
      //backgroundColor:'red',
    },

    con8_1_1:{
      flex:1,
      //backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
    },

    con8_1_2:{
      flex:1,
      //backgroundColor:'pink',
    },

    con8_2:{
      flex:1,
      //backgroundColor:'green',
    },

    con8_2_1:{
      flex:1,
      //backgroundColor:'green',
    },

    con8_2_1_1:{
      flex:1,
      //backgroundColor:'green',
      alignItems:'center',
    },

    con8_2_1_2:{
      flex:1,
      //backgroundColor:'red',
    },

    con8_2_2:{
      flex:1,
      //backgroundColor:'yellow',
    },
    
  
  });