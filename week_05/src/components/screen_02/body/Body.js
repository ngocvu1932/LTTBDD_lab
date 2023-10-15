import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';


export const Body = () => {
    //const route= useRoute();
    const navigation = useNavigation();
    const [imageColor, setImageColor] = useState(require('../../../../assets/vs_blue.png'));
    const [color, setColor]= useState('blue');

    const buttonDone =() => {
        switch (color) {
            case 'blue':
                navigation.navigate('Screen_01')
                break;

            case 'red':
                navigation.navigate('Screen_03')
                break;

            case 'black':
                navigation.navigate('Screen_04')
                break;

            case 'silver':
                navigation.navigate('Screen_05')
                break;
        
            default:
                break;
        }
    }

    const button1Press = () => {
        setImageColor(require('../../../../assets/vs_blue.png'));
        setColor('blue');
    }

    const button2Press = () => {
        setImageColor(require('../../../../assets/vs_red.png'));
        setColor('red');
    }

    const button3Press = () => {
        setImageColor(require('../../../../assets/vs_black.png'));
        setColor('black');
    }

    const button4Press = () => {
        setImageColor(require('../../../../assets/vs_silver.png'));
        setColor('silver');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageLay}>
               <Image style={styles.image} source={imageColor} /> 
               <Text style={styles.text}> Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>
           </View>

            <View>
                <Text style={styles.textSty}> Chọn một màu bên dưới:  </Text>
            </View>

            <View style={styles.grpIcon}>
                <TouchableOpacity onPress={button1Press}> <FontAwesomeIcon icon={faSquare} size={85} color='#234896' /> </TouchableOpacity>
                <TouchableOpacity onPress={button2Press}> <FontAwesomeIcon icon={faSquare} size={85} color='#F30D0D' /> </TouchableOpacity>
                <TouchableOpacity onPress={button3Press}> <FontAwesomeIcon icon={faSquare} size={85} color='##000000'/> </TouchableOpacity>
                <TouchableOpacity onPress={button4Press}> <FontAwesomeIcon icon={faSquare} size={85} color='#E3D8DE'/> </TouchableOpacity>
            </View>

            <View style={styles.viewButtonDone}>
                <TouchableOpacity  onPress={buttonDone}  style={styles.button}>
                    <Text style={styles.textBut}> Xong</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}