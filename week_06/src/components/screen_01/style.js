import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5E5E5',
      justifyContent: 'center',
    },

    conView:{ 
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 10,
        marginRight: 5,
        marginLeft: 5,
        padding: 5
    },

    image: {
        marginLeft: 8,
        //paddingRight: 10,
        height: 74,
        width: 74,
    },

    textName: {
        fontSize: 15,
        fontWeight: '400'
    },

    buttonChat:{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 15,
        borderRadius: 5
    },

    textChat: {
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        fontSize: 14,
        fontWeight: '500'
    }, 

    footer: {
        backgroundColor: '#1BA9FF',
        height: '10%'
    }, 
    grpOp: {
        flexDirection: 'row',
        justifyContent: 'space-around'
        

    }
  });