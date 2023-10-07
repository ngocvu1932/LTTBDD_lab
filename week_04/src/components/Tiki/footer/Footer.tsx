import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'


export const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.total}>
                <Text style={styles.thanhTien}>Thành tiền</Text>
                <Text style={styles.tien}>141.800 đ</Text>

            </View>

            <View style={styles.datHang}>
                <TouchableOpacity style={styles.buttonDathang}>
                    <Text style={styles.textDathang}>TIẾN HÀNH ĐẶT HÀNG</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}