import { StyleSheet } from "react-native";


export const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#E4E4E4'
    },

    conView:{
        flex:1,
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
        borderRadius: 10
    },

    grpRate:{
        //flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
        

    }, 

    grpPrice:{
        marginTop: 10,
        flexDirection:'row',
        alignItems: 'center'

    }, 

    footer: {
        backgroundColor: '#1BA9FF',
        height: '10%'
    }, 
    grpOp: {
        flexDirection: 'row',
        justifyContent: 'space-around'
        

    }

})