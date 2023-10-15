import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily :  "Roboto",
        color: 'white',
    },

    touch: {
        backgroundColor:'#EE0A0A',
        height: 44,
        width: 326,
        //borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});