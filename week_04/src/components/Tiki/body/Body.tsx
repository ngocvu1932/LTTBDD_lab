import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'


export const Body = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}> 
                <Text style={styles.text1}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
                <Text style={styles.text2}>Nhập tại đây?</Text>
            </View>

            <View style={styles.view2}>
                <Text style={styles.tamtinh}> Tạm tính </Text>
                <Text style={styles.giatien}> 141.800 đ</Text>
            </View>
        </View>
    )
}