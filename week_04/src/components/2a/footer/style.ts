import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundImage:'linear-gradient(rgba(251, 203, 0, 1) 0%, rgba(191, 154, 0, 1) 100%)',
        //width: '100%',
        alignItems:'center'
    },

    button:{
        borderWidth: 1,
        height: 45,
        width: 330,
        borderRadius: 3,
        backgroundColor:'black',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    loginText: {
        color: 'white',
        fontSize: 20,
        fontWeight:'700',      
    },

    textFotgot:{
        color: 'black',
        fontSize:20,
        fontWeight: '700',
        marginTop: 20,
    }
});

