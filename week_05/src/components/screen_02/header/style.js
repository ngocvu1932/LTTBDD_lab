import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
       
    },

    image :{
        width: 112,
        height: 132,
    },

    imageLay: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }, 
    text:{
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Roboto',
        //lineHeight: '17px',
        marginTop: 10,

    }
});