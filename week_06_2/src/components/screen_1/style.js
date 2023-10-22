import { StyleSheet } from "react-native";



export const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    }, 

    img: {
        height: 270,
        width: 292
    },

    textOne: {
        fontFamily: 'VT323',
        fontSize: 26,
        fontWeight: '400',
        lineHeight: 26,
        textAlign: 'center'
    }, 

    viewBike: {
        backgroundColor: '#E941411A',
        width: 359,
        height: 388,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }, 

    viewOne: {
        marginTop: 40
    },

    textTwo: {
        fontFamily: 'ubuntu',
        fontSize: 26,
        fontWeight: '700',
        lineHeight: '29.87px',
        textAlign: 'center'
    },

    button: {
        borderRadius: 30,
        width: 340,
        height: 61,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStart: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    }
})