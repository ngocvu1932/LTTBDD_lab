import { StatusBar } from 'expo-status-bar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faEnvelope, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
//import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';
library.add(faCircle);
library.add(faEnvelope);
library.add(faLock);
library.add(faSquare);

// MH1
function MH1() {
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

// MH2
function MH2() {
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

//MH3
function MH3() {
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

function MH4(){
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

function MH5(){
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

function MH6(){
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

function MH7() {
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

function MH8(){
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

export default MH2;

