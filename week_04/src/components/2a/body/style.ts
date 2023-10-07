import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundImage:'linear-gradient(rgba(251, 203, 0, 1) 0%, rgba(191, 154, 0, 1) 100%)',
        //width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    textInput:{
        height: 54,
        width: 330,
        borderWidth: 1,
        borderRadius: 3,
        borderColor:'white',
        paddingLeft: 40,
        fontSize: 18,
    },

    textInputUser:{
        flexDirection: 'row',
        alignItems: 'center',
    }, 

    textInputPassword:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    
});

