import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
    container: {
        flex:1,
    },

    total:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    datHang: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    buttonDathang:{
        backgroundColor: '#E53935',
        width: 331,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    textDathang:{
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: 'white',
    },

    thanhTien:{
        marginLeft: 30,
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Roboto',
        opacity: 0.6,
    },

    tien:{
        color: '#EE0D0D',
        fontSize:20,
        fontWeight: '700',
        fontFamily: 'Roboto',
        marginLeft: 155

    }
    

    
})