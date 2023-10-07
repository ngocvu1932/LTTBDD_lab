import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        
    },

    textInputCon:{
        flex:1,
        alignItems: 'center',
    },

    form:{
        flex:4,
        margin:20,
        justifyContent: 'space-between',
    },

    formStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    textForm: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: 'white',

    },

    textInput:{
        borderWidth: 1,
        height: 55,
        width: 297,
        borderRadius: 2,
        backgroundColor: '#151537',
        fontSize: 20,
        color: 'white',
        fontWeight:'700'
    },

    textInputPass:{
        height: 33,
        width: 118,
        backgroundColor:'white',
    }

})