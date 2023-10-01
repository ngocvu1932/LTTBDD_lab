import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
//import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';

export default function App_XMEye(){
    return(
      <View style={styles8.con8}>
        <Text>
          hí
        </Text>
        <StatusBar style="auto" />
      </View>
    )
  }
  
  const styles8 = StyleSheet.create({
    con8:{
      flex:1,
      backgroundImage:'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
  
    },
    
  
  });