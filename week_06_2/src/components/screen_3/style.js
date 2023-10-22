import { StyleSheet } from "react-native";



export const styles=StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }, 

    img: {
        height: 340,
        width: 297
    },

    viewBike: {
        width: 359,
        height: 388,
        borderRadius:5,
        backgroundColor: '#E941411A',
        justifyContent: 'center',
        alignItems: 'center'
    },

    price: {
        flexDirection: 'row'
    },

    viewCard: {
        position: "absolute",
        flexDirection: 'row',
        bottom: 10,
        left: 20,
        right: 20,
        // backgroundColor: 'red'
        justifyContent: "space-between",
        alignItems: 'center'
    },

    buton: {
        borderRadius: 30,
        backgroundColor: 'red',
        width: 269,
        height: 54,
        justifyContent:'center',
        alignItems: 'center'
    },

    tetxt: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Voltaire',
        fontSize: 25,
        fontWeight: '400'
    },

    textName: {
        fontFamily: 'Voltaire',
        fontWeight: '400',
        fontSize: 35,
        lineHeight:'43.6px'
    }

})