import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center'
    },

    button: {
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'violet',
        height: 40,
        width: 130,
        borderRadius: 10
    }, 

    text: {
        fontSize: 15,
        fontWeight: '500'
    }

})