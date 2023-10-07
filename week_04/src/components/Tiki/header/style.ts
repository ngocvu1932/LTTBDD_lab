import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
    container: {
        flex:1,
        //backgroundColor: 'pink'
    },

    bookDetail: {
        flex:3,
        flexDirection: 'row',
    },

    book:{
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',

    },

    detail:{
        flex:2,
        //backgroundColor: 'yellow',
    },

    voucher:{
        flex:1,
        //backgroundColor: 'pink',

    },

    imgSach:{
        marginTop:10,
        height: 150,
        width: 120,
    },

    textVou:{
        marginTop:20,
        fontSize:12,
        fontWeight:'700',
        fontFamily:'Roboto',
    },

    textBook:{
        marginTop:10,
        fontSize:12,
        fontWeight:'700',
        fontFamily:'Roboto',
        marginLeft: 20,
    },

    priceHeader: {
        fontSize:18,
        fontWeight:'700',
        color: 'red',
        marginLeft: 15,
        marginTop:10
    },

    priceCounDown:{
        fontSize:12,
        fontWeight:'700',
        marginLeft: 21,
        marginTop:10,
        textDecorationLine: 'line-through',
    },

    groupFunc:{
        
        flexDirection:'row',
        marginTop:20,
        marginLeft: 10,
        alignItems:'center',
    },

    button:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        height: 20,
        width: 20,
        marginLeft: 10,
        marginRight: 10,
    },

    quantityNum:{
        fontSize:15,
        fontWeight:'700',
    },

    changeQuantity:{
        fontSize:16,
        fontWeight:'bold',
        
    },

    orderLater:{
        fontSize:12,
        fontWeight:'700',
        fontFamily:'Roboto',
        color:'blue',
        marginLeft: 80
    },

    viewHere:{
        color:'blue',
        fontSize:12,
        fontWeight:'700',
        fontFamily:'Roboto',    
        marginTop: 30,
        marginLeft: 20,
    },

    buttonCoundown:{
        borderRadius: 4,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderWidth:1,
        height: 45,
        width: 208,
        borderColor:'gray'

    },

    buttonApply:{
        borderRadius: 4,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        height: 45,
        width: 99,
        backgroundColor:'#0A5EB7'

    },

    hmmm:{
        
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },

    textApply: {
        fontSize: 20,
        fontWeight:'700',
        fontFamily:'Roboto',   
        color:'white',
    }, 

    textVoucher:{
        paddingLeft: 15,   
        fontSize: 18,
        fontWeight:'700',
        fontFamily:'Roboto',   
        color:'black',
    },  
})