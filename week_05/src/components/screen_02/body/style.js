import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textSty :{
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Roboto',
    },

    grpIcon:{
        flex:3,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    image :{
        width: 95,
        height: 117,
    },

    imageLay: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',

    }, 
    text:{
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Roboto',
        marginTop: 10,
    },

    button: {
        width:326,
        height: 44,
        borderColor: 'gray',
        borderWidth:1,
        borderRadius:3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1952E294',
    },

    textBut:{
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color:'white'
    },

    viewButtonDone:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }

});