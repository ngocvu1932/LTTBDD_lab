import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCamera } from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';

export const Body = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rate}>
                <Text style={styles.text}> Cực kỳ hài lòng</Text>
                <View style={styles.fiveStar}>
                    <FontAwesomeIcon icon={faStar} size={39} color='yellow' />
                    <FontAwesomeIcon icon={faStar} size={39} color='yellow' />
                    <FontAwesomeIcon icon={faStar} size={39} color='yellow'/>
                    <FontAwesomeIcon icon={faStar} size={39} color='yellow'/>
                    <FontAwesomeIcon icon={faStar} size={39} color='yellow'/>
                </View>
            </View>

            <View style={styles.buttonAddImage}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon icon={faCamera} size={39} style={{marginLeft: 50}} />
                    <Text style={styles.textImage}> Thêm hình ảnh</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.addMessage}>
                <TextInput style={styles.textInput} placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm' multiline={true} numberOfLines={10}
>
                </TextInput>
                <Text style={styles.textGG}> https://meet.google.com/nsj-ojwi-xpp</Text>

            </View>
        </View>
    )
};