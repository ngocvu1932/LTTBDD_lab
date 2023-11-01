import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: 'white'
    },

    textInSear: {
      height: 40,
      width: 320,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      paddingLeft: 35,
      fontSize: 16
    },

    viewTextSear: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 50,
      marginTop: 30
    },

    viewItem: {
      flexDirection: 'row',
      height: 40,
      width: 320,
      backgroundColor: '#D3D5D9',
      marginBottom: 10,
      alignItems: 'center',
      borderRadius: 20,
      justifyContent: 'space-between'
    },

    textItem: {
      flex:1,
      fontWeight: 'bold',
    },

    viewHi: {
      marginRight: 40,
      flexDirection: 'row'
      
    },

    buttonAdd: {
      height: 60,
      width: 60,
      backgroundColor: '#26C3D9',
      borderRadius: 30,
      alignItems:'center',
      justifyContent: 'center'
    },

    viewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    buttonback: {
      marginLeft: 10,
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1
    },

    avt: {
      height: 40, 
      width: 40,
      borderRadius: 20
    },

    
  });
  