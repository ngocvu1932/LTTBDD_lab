import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
    container:{
        flex:1
    },

    rate:{
        flex:1,
        alignItems:'center', 
    },

    text:{
        fontSize: 18, 
        fontWeight: '700',
        fontFamily: 'Roboto',
    }, 
    fiveStar:{
        flexDirection:'row',
        marginTop: 10,
        

    }, 
    buttonAddImage:{
        flex:1,
        alignItems:'center',
    },

    button: {
        borderWidth: 1,
        height:68,
        width: 293,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        
    }, 

    textImage:{
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Roboto',
    }, 

    addMessage: {
        flex:3,
        alignItems:'center',
    },

    textInput: {
        borderWidth: 1,
        height: 222,
        width: 293,
        borderRadius: 3,
        fontSize: 18,
        fontWeight: '700',
        opacity: 0.5,
    }, 

    textGG: {
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Roboto',
        marginTop: -20,
        marginLeft: 70,
    }
})