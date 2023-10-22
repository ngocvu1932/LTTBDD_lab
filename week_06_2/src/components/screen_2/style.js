import { StyleSheet } from "react-native";



export const styles=StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }, 

    viewBike: {
        width: 167,
        height: 200,
        backgroundColor: '#F7BA8326',
        borderRadius: 10,
        margin: 10,
        
    },

    img: {
        marginTop: -30,
        width: 130,
        height: 130
    },

    viewSel:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },

    button: {
        width: 99,
        height: 32,
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'#E9414187',
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    texxt: {
        color: '#E94141',
        fontFamily: 'Ubuntu',
        fontWeight: '700',
        fontSize: 25,
        lineHeight: '28.72px'
    }

    
})