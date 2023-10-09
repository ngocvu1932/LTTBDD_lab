import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        fontSize: 15,
        fontWeight: '400',
        fontFamily :  "Roboto",
        lineHeight: '17px',
    },

    grpRate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 30,
    },

    grpPrice:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30,
    },

    textPrice:{
        fontSize: 18,
        fontWeight: '700',
        fontFamily :  "Roboto"
    },

    textPrice2: {
        marginLeft: 100,
        fontSize: 15,
        fontWeight: '700',
        fontFamily :  "Roboto",
        opacity: 0.8,
        textDecorationLine: 'line-through',
    },
    
    touch:{
        marginLeft:30,
        height: 20,
        width: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent:'center',
        alignItems:'center'
    },

    grpNow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 30,
    },

    touchChooseColor: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
        height: 34,
        width: 332,
    }
});