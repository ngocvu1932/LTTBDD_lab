import React from 'react'
import { View, Text , Image, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { styles } from './style'


export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bookDetail}> 
                <View style={styles.book}>
                    <Image style={styles.imgSach} source={require('../../../../assets/sach.png')}/>
                    <Text style={styles.textVou}> Mã giảm giá đã lưu</Text>
                </View>

                <View style={styles.detail}>
                    <Text style={styles.textBook}> Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={styles.textBook}> Cung cấp bởi Tiki Trading</Text>
                    <Text style={styles.priceHeader}> 141.800đ</Text>
                    <Text style={styles.priceCounDown} >141.800đ</Text>

                    <View style={styles.groupFunc}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.changeQuantity}> - </Text>
                        </TouchableOpacity>

                        <Text style={styles.quantityNum}> 1 </Text>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.changeQuantity} > + </Text>
                        </TouchableOpacity>

                        <Text style={styles.orderLater}> Mua sau </Text>
                    </View>
                    <Text style={styles.viewHere}> Xem tại đây</Text>
                </View>
            </View>

            <View style={styles.voucher}>
                <View style={styles.hmmm}>
                    <TouchableOpacity style={styles.buttonCoundown}>
                        <FontAwesomeIcon icon={faSquareFull} color='yellow'/>
                        <FontAwesomeIcon icon={faSquareFull} color='yellow'/>
                        <Text style={styles.textVoucher}> Mã giảm giá </Text>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonApply}>
                        <Text style={styles.textApply}> Áp dụng</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}